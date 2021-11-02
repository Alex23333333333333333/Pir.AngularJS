'use strict';
angular.
  module('registrationApp').
  component('registration', {
    templateUrl: 'registration/registration.template.html',
    controller: [ 'User', '$scope',
      function RegistrationController( User, $scope) {
        var self = this;
        self.autorized = User.autorized();
        self.registrate = function () {
          if ($scope.name == undefined || $scope.birthday == undefined || $scope.adress == undefined || $scope.phone == undefined) {
            alert("Please, fill all fields");
            return;
          }
        
            var newUser = {
              name: $scope.name,
              birthday: $scope.birthday,
              adress: $scope.adress,
              phone: $scope.phone
            }
            User.addUser(newUser);
            alert("Registrated successfully!")
          

        }
        self.login = function () {
          if (User.login($scope.nameLogin)) {
            self.autorized = true;
            alert("Successfully loged in!");
          }
          else {
            alert("Wrong name!");
          }
        }


      }
    ]
  });