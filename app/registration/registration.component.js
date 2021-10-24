'use strict';
angular.
  module('registrationApp').
  component('registration', {
    templateUrl: 'registration/registration.template.html',
    controller: ['$routeParams',
      function BookDetailsController($routeParams) {
        var self = this;

        self.setUser = function setUser() {
         self.User=
         {}
        };
      }
    ]
  });