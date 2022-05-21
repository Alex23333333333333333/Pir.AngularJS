angular.
  module('core.item').
  factory('ItemsService', ['$http', '$location',
    function ($http, $location) {
      var books = [];
      var factory = {};

      factory.getItems = function () {
        return $http.get('https://localhost:44392/Items').then(function successCallback(response) {
          return response.data;
        }, function errorCallback(response) {
    
        });
      };

      factory.getItem = function (id) {
        return $http({
          method: 'GET',
          url: 'https://localhost:44392/Items/id?itemId='+id
        }).then(function successCallback(response) {
          return response.data;
        }, function errorCallback(response) {
          
        });
      };

      factory.editItem = function (item) {
        var url = 'https://localhost:44392/Items/';
        return $http.put(url, JSON.stringify(item)).then(function successCallback(response) {

          alert("The item was succeddfully edited");
        }, function errorCallback(response) {
          {
            
          }
        });
      }
      factory.printReport = function (order) {
        var url = 'https://localhost:44392/Items/printReport';
        return $http.put(url, JSON.stringify(order)).then(function successCallback(response) {

          alert("Report is successfully saved");
        }, function errorCallback(response) {
          {
            
          }
        });
      }



      factory.changeStatus = function (id) {
    
        return $http({
          method: 'PATCH',
          url: 'https://localhost:44378/api/books/',
          params: { id: id }
        }).then(function successCallback(response) {
          return true;
        }, function errorCallback(response) {
         

        });
      }

      factory.addItem = function (item) {
        return $http.post('https://localhost:44392/Items/', JSON.stringify(item)).then(function successCallback(response) {

          alert("The item was succeddfully added");
        }, function errorCallback(response) {
          
           
        });
      }
      factory.delete = function (id) {
        return $http({
          method: 'DELETE',
          url: 'https://localhost:44392/Items',
          params: { id: id }
        }).then(function successCallback(response) {
          alert("Item was successfully deleted")
          $location.path('/');

        }, function errorCallback(response) {
          
      });}
      return factory;
    }

  ]);