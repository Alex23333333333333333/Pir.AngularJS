angular.
  module('core.user').
  factory('User', ['$http', '$location',
    function ($http, $location) {
      var factory = {};
      factory.addUser = function (user) {
        return $http.post('https://localhost:44392/Users/', JSON.stringify(user)).then(function successCallback(response) {

          alert("The user was succeddfully added");
        }, function errorCallback(response) {
          
           
        });
      }

      factory.login = function (user) {

        return $http.post('https://localhost:44392/Users/login', JSON.stringify(user)).then(function successCallback(response) {
          if (response.data!="") {
            localStorage.setItem("Role", response.data.role);
            localStorage.setItem("Id", response.data.id);
            alert("Successfully loged in!");
            return true;
          }
          alert("Wrong credentials");
          return false;

        }, function errorCallback(response) {
          alert("Wrong credentials");
          return false;
        });
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


      factory.logout = function () {
        localStorage.removeItem("Id");
        localStorage.removeItem("Role");
      }

      factory.getUsers = function () {
        return $http.get('https://localhost:44392/Users').then(function successCallback(response) {
          return response.data;
        }, function errorCallback(response) {
    
        });
      };
      factory.editUser = function (user) {
        var url = 'https://localhost:44392/Users/';
        return $http.put(url, JSON.stringify(user)).then(function successCallback(response) {

          alert("Deactivated");
         
        }, function errorCallback(response) {
          {
            
          }
        });
      }

      return factory;

    }]


  );