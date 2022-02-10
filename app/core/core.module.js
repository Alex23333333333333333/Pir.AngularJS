var app = angular.module('core', ['core.book', 'core.user']);
app.factory('LibraryInterceptor', ['$log', '$location', function ($q, $location, dependency2) {
    return {
        // optional method
        'request': function (config) {
            if (localStorage.getItem('JWT'))
                config.headers.Authorization = 'Bearer ' + localStorage.getItem('JWT');
            return config;
        },

        // optional method
        'requestError': function (rejection) {
            // do something on error
            if (canRecover(rejection)) {
                return responseOrNewPromise
            }
            return $q.reject(rejection);
        },
        // optional method
        'response': function (response) {
            // do something on success
            return response;
        },

        // optional method
        'responseError': function (rejection) {
            if (rejection.status == 401) {
                $location.path('/registration');
                localStorage.removeItem('JWT');
                localStorage.removeItem('Id');
            }
            if (rejection.status == 400) {
                if(rejection.data.error == "invalid_grant")
                {
                    alert("Sorry, there is no user with this credentials");
                }
                else{
                    alert("Bad request");
                    $location.path('/');
                }
               
            }
            if (rejection.status == 404) {
                alert(rejection.data);
                $location.path('/');
            }
            if (rejection.status == 409) {
                alert(rejection.data);
            }
            if (rejection.status == 500) {
                alert('Server error');
            }

            if (rejection.status == 403) {
                alert("Forbiden!");
                $location.path('/');
            }
           
            if (canRecover(rejection)) {
                return responseOrNewPromise
            }
            return $q.reject(rejection);
        }
    };
}]);



app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('LibraryInterceptor');
}]);
