angular.
  module('core.book').
  factory('User', ['$http','$location',
    function ($http,$location) {
      var factory = {};

      factory.addUser = function (user) {
        return $http.post('https://localhost:44378/api/users', JSON.stringify(user)).then(function successCallback(response) {
          alert("Registrated successfully!");
          return response.data;

        }, function errorCallback(response) {
        
        });
      }
      factory.login = function (user) {
        var data = "grant_type=password&username=" + user.username + "&password=" + user.password;

        return $http.post('https://localhost:44378/login',data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } } ).then(function successCallback(response) {
         localStorage.setItem("JWT", response.data.access_token);
          localStorage.setItem("Id", factory.parseJWT(response.data.access_token).Id);

          alert("Successfully loged in!");
          return true;
        }, function errorCallback(response) {
        
        });
      }
      factory.parseJWT = function(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
      }
      factory.autorized = function () {
        return localStorage.getItem("Id") != null;
      }
      factory.getCurrentUserId = function () {
        return localStorage.getItem("Id");
      }


      factory.logout = function() {
        return $http({
          method: 'GET',
          url: 'https://localhost:44378/logout/'
        }).then(function successCallback(response) {
          localStorage.removeItem('JWT');
          localStorage.removeItem('Id');
          $location.path('/registration');

          return true;
        }, function errorCallback(response) {
    
        });
      }

      return factory;

    }]


  );