'use strict';
angular.
  module('bookDetailsApp').
  component('bookDetails', {
    templateUrl: 'book-details/book-details.template.html',
    controller: ['$routeParams', 'BookList',
      function BookDetailsController($routeParams, BookList) {
        var self = this;
        var name = localStorage.getItem('NAME');
       
        self.bookId = $routeParams.bookId;
       self.book = BookList.getBookDetails(self.bookId);
        self.userIsAutorized = name!=null;
        self.rightToEdit= self.userIsAutorized && name == self.book.addedBy;
        self.reserve = function(){
          BookList.reserve(self.bookId);
        };
        self.return = function(){
          BookList.return(self.bookId);
        }
      }
    ]
  });