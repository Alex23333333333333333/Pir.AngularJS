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
          template: '<add-book></add-book>'
        }).
        when('/editBook/:bookId', {
          template: '<edit-book></edit-book>'
        }).
        otherwise('/books');
    }
  ]);