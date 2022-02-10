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
      .state('books', {
        url: "/books",
        templateUrl: "books/book-list/book-list.template.html"
      })
      .state('book-details', {
        url: "/books/{bookId}",
        templateUrl: "books/book-details/book-details.template.html"
      })
      .state('registration', {
        url: "/registration",
        templateUrl: "registration/registration.template.html"
      })
      .state('add-book', {
        url: "/addBook",
          templateUrl: "books/book-add/book-add.template.html"
       })
       .state('edit-book', {
        url: '/editBook/{bookId}',
          templateUrl: "books/book-edit/book-edit.template.html"
       })
      });