'use strict';
angular.module('booksApp').
  component('itemsList', {
    templateUrl: 'items/items-list/items-list.template.html',
    controller: ['ItemsService', 'User', '$scope', function ItemsListcontroller(ItemsService, User, $scope) {
      this.orderProp = 'name';
      this.role = User.userRole();
      var self = this;
      this.delete = function (id) {
      ItemsService.delete(id);
      }
  

      ItemsService.getItems().then(
        (data) => { self.items = data; }
      );
    }]
  })