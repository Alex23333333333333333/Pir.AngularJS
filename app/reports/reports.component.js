'use strict';
angular.module('reportsApp').
    component('reports', {
        templateUrl: 'reports/reports.template.html',
        controller: ['OrdersService', 'CustomerService', 'ItemsService', 'User', '$route', function ReportsController(OrdersService, CustomerService, ItemsService, User, $route) {
            var self = this;
            self.orderOpen = false;
            self.clean = function () {
                self.orderOpen = false;
                self.customerOpen = false;
                self.ordersOpen = false;
                self.logsOpen = false;
            }
            self.ReportOrder = function () {
                self.pending = true;
                self.clean();
                self.orderOpen = true;
                OrdersService.getOrder(self.orderId).then((data) => {
                    self.order = data
                    if (!self.order) {
                        alert("there is no such order");
                        self.pending = false;
                        return;
                    }
                    CustomerService.getCustomer(self.order.customer).then((customer) => {

                        self.order.customerInfo = customer;

                        ItemsService.getItem(self.order.item).then((item) => {

                            self.order.itemInfo = item;
                            ItemsService.printReport(self.order);
                            self.pending = false;
                        
                        });
                      
                    });
                })
            };

            self.ReportCustomer = function () {
                self.pending = true;
                self.clean();
                self.customerOpen = true;
                CustomerService.getCustomerByNumber(self.customerNumber).then((data => {
                    self.customer = data;
                    if (!self.customer) {
                        alert("there is no such customer");
                        self.pending = false;
                        return;
                    }
                    OrdersService.getCustomerOrders(self.customer.id).then((orders) => { self.customerOrders = orders; 
                        self.Sum =0;
                        self.customerOrders.forEach(ord => {
                            self.Sum+=ord.amount;
                        });
                        self.pending = false; });
                    alert("Report is successfully saved");
                })

                )
            }
            self.ReportOrders = function () {
                self.pending = true;
                self.clean();
                self.ordersOpen = true;
                if (self.startDate > self.finalDate) {
                    alert("Start date cannot be later then end date");
                    self.pending = false;
                    return;
                }
                OrdersService.getOrdersByPeriod(self.startDate, self.finalDate).then((data) => { self.orderRep = data;  self.pending = false;});
                alert("Report is successfully saved");

            }
            self.Logs = function()
            { self.clean();
                self.logsOpen = true;
                self.pending = true;
                OrdersService.getLogs().then((data)=>{self.pending = false; self.logs = data;});
            }
        }]
    })