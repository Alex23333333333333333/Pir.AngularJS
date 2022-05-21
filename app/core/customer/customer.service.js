angular.
  module('core.customer').
  factory('CustomerService', ['$http', '$location',
    function ($http, $location) {
      var books = [];
      var factory = {};
  
      factory.getCustomers = function () {
        return $http.get('https://localhost:44392/Customers').then(function successCallback(response) {
          return response.data;
        }, function errorCallback(response) {
    
        });
      };

      factory.getCustomer = function (id) {
        return $http({
          method: 'GET',
          url: 'https://localhost:44392/Customers/id?customerId='+id
        }).then(function successCallback(response) {
          return response.data;
        }, function errorCallback(response) {
          
        });
      };
      factory.getCustomerByNumber = function (number) {
        return $http({
          method: 'GET',
          url: 'https://localhost:44392/Customers/getByPhone/?phoneNumber='+number
        }).then(function successCallback(response) {
          return response.data;
        }, function errorCallback(response) {
          
        });
      };

  
      return factory;
    }

  ]);