angular.
  module('core.order').
  factory('OrdersService', ['$http', '$location',
    function ($http, $location) {
      var books = [];
      var factory = {};
      factory.getOrder = function (id) {
        return $http({
          method: 'GET',
          url: 'https://localhost:44392/Orders/id?orderId='+id
        }).then(function successCallback(response) {
          return response.data;
        }, function errorCallback(response) {
          
        });
      };

      factory.getOrders = function () {
        return $http.get('https://localhost:44392/Orders').then(function successCallback(response) {
          return response.data;
        }, function errorCallback(response) {
    
        });
      };

      factory.getCustomerOrders = function (customerId) {
        return $http.get('https://localhost:44392/Orders/getCustomerOrders/?customerId='+customerId).then(function successCallback(response) {
          return response.data;
        }, function errorCallback(response) {
    
        });
      };
      factory.getOpenOrders  = function () {
        return $http.get('https://localhost:44392/Orders/openOrders').then(function successCallback(response) {
          return response.data;
        }, function errorCallback(response) {
    
        });
      };

      factory.addOrder = function (order) {
        return $http.post('https://localhost:44392/Orders', JSON.stringify(order)).then(function successCallback(response) {

          alert("Your order was succeddfully added. We will contact you as soon as possible. Thank you for your choise!");
        }, function errorCallback(response) {  
           
        });
      }

      factory.editOrder = function (order) {
        var url = 'https://localhost:44392/Orders/';
        return $http.put(url, JSON.stringify(order)).then(function successCallback(response) {

          alert("Status was successfully changed");
         
        }, function errorCallback(response) {
          {
            
          }
        });
      }

      factory.getOrdersByPeriod = function (start,end) {
        return $http({
          url: "https://localhost:44392/Orders/getOrdersByPeriod", 
          method: "GET",
          params: {end: end,start: start,}
       }).then(function successCallback(response) {
          return response.data;
        }, function errorCallback(response) {
    
        });
      };
      factory.getLogs= function () {
        return $http({
          url: "https://localhost:44392/Orders/getLogs", 
          method: "GET"
       }).then(function successCallback(response) {
          return response.data;
        }, function errorCallback(response) {
    
        });
      };
  
      return factory;
    }

  ]);