'use strict';
angular.
    module('booksApp').
    component('editItem', {
        templateUrl: '/items/item-edit/item-edit.template.html',
        controller: ['ItemsService', '$scope', 'User', '$routeParams',
            function EditItemController(ItemsService, $scope, User, $routeParams) {
                var self = this;
                $scope.itemId = $routeParams.itemId;
                $scope.item = ItemsService.getItem($scope.itemId).then((item) => {
                    $scope.title = item.title;
                    $scope.fabric = item.fabric;
                    $scope.brand = item.brand;
                    $scope.price = item.price;
                    $scope.amount = item.amount;
                });

                self.editItem = function () {

                    var item = {
                        Title: $scope.title,
                        Fabric: $scope.fabric,
                        Brand: $scope.brand,
                        Price: $scope.price,
                        Amount: $scope.amount,
                        Id: $routeParams.itemId
                    };
                    ItemsService.editItem(item);
                }
            }
        ]
    });