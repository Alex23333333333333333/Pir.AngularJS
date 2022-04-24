'use strict';
angular.
  module('booksApp').
  component('itemDetails', {
    templateUrl: 'items/item-details/item-details.template.html',
    controller: ['$routeParams', 'ItemsService','OrdersService', 'User', '$scope',
      function ItemDetailsController($routeParams,ItemsService, OrdersService, $scope) {
        var self = this;
        self.itemId = $routeParams.itemId;
        ItemsService.getItem(self.itemId).then((data) => {
          self.item = data;
        });
        self.addOrder = function () {
          var order =
          {
            Item: self.itemId,
            Customer:{
              FirstName: self.name,
              SecondName: self.family,
              PhoneNumber: self.number
            },     
            Amount: self.amount

          };
         OrdersService.addOrder(order);
         document.getElementById("form").reset();
        };
      }
    ]
  });