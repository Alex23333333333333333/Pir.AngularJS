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
        otherwise('/books');
    }
  ]);