'use strict';
angular.
  module('booksApp').
  component('bookDetails', {
    templateUrl: 'books/book-details/book-details.template.html',
    controller: ['$routeParams', 'BookList', 'User', '$scope',
      function BookDetailsController($routeParams, BookList, User, $scope) {
        var self = this;
        var currentUserName = User.getCurrentUserName();

        self.bookId = $routeParams.bookId;
        $scope.bookId = self.bookId;
        self.book = BookList.getBookDetails(self.bookId);
        $scope.available = self.book.available

        self.userIsAutorized = currentUserName != null;
        self.rightToEdit = self.userIsAutorized && currentUserName == self.book.addedBy;
        self.rightToReturn = self.userIsAutorized && currentUserName == self.book.reservedBy;
        self.logOut = function () {
          self.userIsAutorized = false;
          self.rightToEdit = false;
          self.rightToReturn = false;
          User.logout();
        };
        var createNewBook = function()
        {
          return  {
            id: self.book.id,
            name: self.book.name,
            date: self.book.date,
            publisher: self.book.publisher,
            writer: self.book.writer,
            imgUrl: self.book.imgUrl,
            available: !self.book.available,
            addedBy: self.book.addedBy,
            reservedBy: currentUserName
          };
          
        };
        
        self.reserve = function () {
          self.book = createNewBook();
          self.rightToReturn = self.userIsAutorized && currentUserName == self.book.reservedBy;
          BookList.editBook(self.Book);
        }
         
        self.return = function () {
         self.book = createNewBook();
         self.book.reservedBy=undefined;
         self.rightToReturn = undefined;
          BookList.editBook(self.book);
        }
      
    }
    ]
  });