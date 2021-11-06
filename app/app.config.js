'use strict';
angular.
  module('libraryApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/books', {
          template: '<book-list></book-list>'
        }).
        when('/books/:bookId', {
          template: '<book-details></book-details>'
        }).
        when('/registration', {
          template: '<registration></registration>'
        }).
        when('/addBook', {
          template: '<add-book></add-book>',
          authenticated: true
        }).
        when('/editBook/:bookId', {
          template: '<edit-book></edit-book>',
          authenticated: true
        }).
        otherwise('/books');
    }
  ]);
angular.
  module('libraryApp').run(["$rootScope", "$location", "authFact", function ($rootScope, $location, authFact) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      if (next.$$route.authenticated && next.$$route.template=='<add-book></add-book>') {
        if(!authFact.hasRightToAdd())
        {
        $location.path('/');
        }
      }
      if (next.$$route.authenticated && next.$$route.template=="<edit-book></edit-book>") {

        if(!authFact.hasRightToEdit(next.params.bookId))
        {
        $location.path('/');
        }
      }
    })
  }])