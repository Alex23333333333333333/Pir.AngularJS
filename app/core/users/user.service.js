angular.
  module('core.book').
  factory('User', [
    function () {
      var factory = {};
      var users = [
        {
          name: "dasha",
          birthday: "2001.09.09",
          adress: "ddd",
          phone: "67546546"

        },
        {
          name: "jane",
          birthday: "2001.09.09",
          adress: "ddd",
          phone: "67546546"

        },
        {
          name: "luda",
          birthday: "2001.09.09",
          adress: "ddd",
          phone: "67546546"

        },
        {
          name: "sasha",
          birthday: "2001.09.09",
          adress: "ddd",
          phone: "67546546"

        }
      ];

      factory.seeding = function () {
        if (JSON.parse(localStorage.getItem('users')) == null)
          localStorage.setItem('users', JSON.stringify(users));
        return users;
      }

      factory.getUser = function (name) {
        return JSON.parse(localStorage.getItem('users')).find(function (user) { return user.name == name });
      }

      factory.addUser = function (user) {
        var users = JSON.parse(localStorage.getItem('users'));
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
      }
      factory.login = function (name) {

        if (this.getUser(name) != null) {
          localStorage.setItem("USER", name);
          var user = localStorage.getItem("USER");
          return true;
        }
        return false;
      }
      factory.autorized = function login() {
        return localStorage.getItem("USER") != null;
      }
      factory.getCurrentUserName = function () {
        return localStorage.getItem("USER");
      }

      factory.logout = function login() {
        localStorage.removeItem("USER");
      }

      return factory;

    }]


  );