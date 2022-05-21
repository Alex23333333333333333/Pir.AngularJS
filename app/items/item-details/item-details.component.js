'use strict';
angular.
  module('booksApp').
  component('itemDetails', {
    templateUrl: 'items/item-details/item-details.template.html',
    controller: ['$routeParams', 'ItemsService','OrdersService', 'User', '$scope',
      function ItemDetailsController($routeParams,ItemsService, OrdersService, $scope) {
        var self = this;
        self.pending=false;
        self.itemId = $routeParams.itemId;
        self.pending = true;
        ItemsService.getItem(self.itemId).then((data) => {
          
          self.item = data;
          self.pending = false;
        });
        self.addOrder = function () {
          self.pending = true;
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
         OrdersService.addOrder(order).then(()=>{self.pending = false;});
         document.getElementById("form").reset();
        };
      }
    ]
  });