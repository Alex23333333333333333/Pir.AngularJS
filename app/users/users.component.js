'use strict';
angular.module('usersApp').
    component('users', {
        templateUrl: 'users/users.template.html',
        controller: ['OrdersService', 'CustomerService', 'ItemsService', 'User', '$route', function UsersController(OrdersService, CustomerService, ItemsService, User, $route) {
            var self = this;
            self.changeStatus = function (order) {
                if (order.status == 2) {
                    order.status = 3;
                    var index = $scope.orders.indexOf(order);
                    $scope.orders.splice(index, 1);
                }
                else {
                    order.status = 2;
                }
                OrdersService.editOrder(order);

            };
            self.cancel = function (user) {

                user.status = 2;
                User.editUser(user);
                
            };
            self.addUser = function () {
                if (self.password.replace(' ','') != self.confPassword.replace(' ','')) {
                    alert("Passwords should match");
                    return;
                }
             var a = false;
                self.users.forEach(user => {
                    var a = user.email.replace(/\s/g, '')
                    if(a==self.email.replace(' ',''))
                    {
                        alert("User with this email already exists");
                    a=true;
                    }
                });
                if(a)return;
               
                var user = {
                    Email: self.email,
                    Password: self.password,
                    Status: 1,
                    Role: 2
                }
                if (self.isAdmin) user.Role = 1;
                User.addUser(user);
                document.getElementById("form").reset();

            }
            self.pending = true;
            User.getUsers().then(
                
                (data) => {
                    self.pending = false;
                    self.users = data;
                }
            );
        }]
    })