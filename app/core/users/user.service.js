angular.
  module('core.user').
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

        return $http.post('https://localhost:44392/Users/login',JSON.stringify(user) ).then(function successCallback(response) {
          if(response)
          {
            localStorage.setItem("Role", response.data.role);
            localStorage.setItem("Id", response.data.id);
            alert("Successfully loged in!");
            return true;
          }
          return false;
         
        }, function errorCallback(response) {
        return false;
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
      factory.userRole = function () {
        return localStorage.getItem("Role");
      }


      factory.logout = function() {
    localStorage.removeItem("Id");
    localStorage.removeItem("Role");
      }

      return factory;

    }]


  );