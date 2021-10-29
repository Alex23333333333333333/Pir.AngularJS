'use strict';
angular.
  module('registrationApp').
  component('registration', {
    templateUrl: 'registration/registration.template.html',
    controller: ['$routeParams', 'User','$scope',
      function BookDetailsController($routeParams, User, $scope) {
        var self = this;
        self.autorized = User.autorized();
        self.registrate = function()
        {
          var newUser ={
            name:$scope.name,
            birthday:$scope.birthday,
            adress:$scope.adress,
            phone:$scope.phone
           }
          User.addUser(newUser);
          alert("Registrated successfully!")
        }
        self.login = function()
        {
          if(User.login($scope.nameLogin))
          {
           self.autorized=true;
           alert("Successfully loged in!");
          }
          else{
            alert("Wrong name!");
          }
        }
       
        
      }
    ]
  });