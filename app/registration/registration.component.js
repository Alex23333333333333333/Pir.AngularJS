'use strict';
angular.
  module('registrationApp').
  component('registration', {
    templateUrl: 'registration/registration.template.html',
    controller: ['User', '$scope', '$interval',
      function RegistrationController(User, $scope, $interval) {
        var self = this;
        var interval = $interval(() => { self.autorized = User.autorized(); }, 100);

        self.registrate = function () {
          if (self.password != self.passwordConf) {
            alert("Passworda must match!");
          }
          else {


            var newUser = {
              Name: self.name,
              Birthday: self.birthday,
              Adress: self.adress,
              Phone: self.phone,
              Email: self.email,
              Password: self.password
            }
            document.getElementById("registrationForm").reset();
            User.addUser(newUser).then((data) => { });
          }
        }
        self.login = function () {


          var loginModel = {
            Email: self.emailLogin,
            Password: self.passwordLogin,
          }
          document.getElementById("loginForm").reset();
          User.login(loginModel).then(data => {
            if (data == true) self.autorized = true;
          })
        }
      }
    ]
  });