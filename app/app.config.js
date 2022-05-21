'use strict';
angular.
  module('libraryApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/items', {
          template: '<items-list></items-list>'
        })
        .when('/orders', {
          template: '<orders></orders>',
          authenticated: true
        }) .when('/reports', {
          template: '<reports></reports>',
          authenticated: true
        }).
        when('/users', {
          template: '<users></users>',
          authenticated: true
        }).
        when('/items/:itemId', {
          template: '<item-details></item-details>'
        }).
        when('/registration', {
          template: '<registration></registration>'
        }).
        when('/addItem', {
          template: '<add-item></add-item>',
          authenticated: true
        }).
        when('/editItem/:itemId', {
          template: '<edit-item></edit-item>',
          authenticated: true
        }).
        otherwise('/items');
    }
  ]);
angular.
  module('libraryApp').run(["$rootScope", "$location", "authFact", function ($rootScope, $location, authFact) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      if(next.$$route==undefined)
      {
        $location.path('/');
        return;
      }
      if (next.$$route.authenticated && next.$$route.template=='<add-book></add-book>') {
        if(!authFact.hasRightToAdd())
        {
        $location.path('/');
        }
      }
      if (next.$$route.authenticated && next.$$route.template=="<edit-book></edit-book>") {

        if(authFact.hasRightToEdit(next.params.bookId).then((data)=>{data==false}))
        {
        $location.path('/');
        }
      }
    })
  }]);

  angular.
  module('libraryApp').config(function($stateProvider, $urlRouterProvider) {
    //
    // Любые неопределенные url перенаправлять на /state1
    $urlRouterProvider.otherwise("/books");
    //
    // Теперь определим состояния
    $stateProvider
      .state('items', {
        url: "/items",
        templateUrl: "items/items-list/items-list.template.html"
      })
      .state('orders', {
        url: "/orders",
        templateUrl: "orders/orders.template.html"
      })
      .state('users', {
        url: "/users",
        templateUrl: "users/users.template.html"
      })
      .state('reports', {
        url: "/reports",
        templateUrl: "reports/reports.template.html"
      })
      .state('item-details', {
        url: "/items/{itemId}",
        templateUrl: "items/item-details/item-details.template.html"
      })
      .state('registration', {
        url: "/registration",
        templateUrl: "registration/registration.template.html"
      })
      .state('add-item', {
        url: "/addItem",
          templateUrl: "items/item-add/item-add.template.html"
       })
       .state('edit-item', {
        url: '/editItem/{itemId}',
          templateUrl: "items/item-edit/item-edit.template.html"
       })
      });