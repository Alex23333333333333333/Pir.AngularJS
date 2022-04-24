angular.
  module('core.order').
  factory('OrdersService', ['$http', '$location',
    function ($http, $location) {
      var books = [];
      var factory = {};

     

      factory.addOrder = function (order) {
        return $http.post('https://localhost:44392/Orders', JSON.stringify(order)).then(function successCallback(response) {

          alert("Your order was succeddfully added. We will contact you as soon as possible. Thank you for your choise!");
        }, function errorCallback(response) {  
           
        });
      }
  
      return factory;
    }

  ]);