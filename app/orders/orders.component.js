'use strict';
angular.module('ordersApp').
    component('orders', {
        templateUrl: 'orders/orders.template.html',
        controller: ['OrdersService', 'CustomerService', 'ItemsService', 'User','$route', function Orderscontroller(OrdersService, CustomerService, ItemsService, User,$route) {
            var self = this;
            self.pending = false;
            self.changeStatus = function (order) {
                
                if (order.status == 2) {
                    order.status = 3;   
                }
                else {
                    order.status = 2;
                }
                OrdersService.editOrder(order);
      
            };
            self.cancel = function (order) {

                order.status = 4;
                OrdersService.editOrder(order);    
                var index = $scope.orders.indexOf(order);
                $scope.orders.splice(index, 1);      
            };
            this.role = User.userRole();
            self.pending = true;
            OrdersService.getOpenOrders().then(
              
                (data) => {
                    self.pending=true;
                    self.orders = data;
                    CustomerService.getCustomers().then((customers) => {
                        self.orders.forEach(order => {
                            order.customerInfo = customers.find(x => x.id == order.customer);
                        });

                        ItemsService.getItems().then((items) => {
                            self.orders.forEach(order => {
                                order.itemInfo = items.find(x => x.id == order.item);
                                self.pending = false;
                            });
                        });
                    });
                }
            );
        }]
    })