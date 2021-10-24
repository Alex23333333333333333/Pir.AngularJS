'use strict';
angular.
  module('bookDetailsApp').
  component('bookDetails', {
    templateUrl: 'book-details/book-details.template.html',
    controller: ['$routeParams', 'Book',
      function BookDetailsController($routeParams, Book) {
        var self = this;
        var name = localStorage.getItem('NAME');
       
        self.bookId = $routeParams.bookId;
        var book = Book.query();

        book.$promise.then(function () {
          self.book = book.find(function (i) { return i.id == self.bookId });
        })
        self.userIsAutorized = name!=null;
        self.rightToEdit= self.userIsAutorized && name == self.book.addedBy;
      }
    ]
  });