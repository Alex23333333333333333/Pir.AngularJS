'use strict';
angular.
  module('booksApp').
  component('addItem', {
    templateUrl: 'items/item-add/item-add.template.html',
    controller: ['ItemsService', '$scope', 'User',
      function AddItemController(ItemsService, $scope, User) {
        var self = this;
        self.addItem = function () {
          var item = {
            Title: this.title,
            Brand: this.brand,
            Price: this.price,
            Amount: this.amount,
            Fabric: this.fabric
          };         
              ItemsService.addItem(item);     
          document.getElementById("addItemForm").reset();

          //send your binary data via $http or $resource or do anything else with it
        }
      }
    ]
  });