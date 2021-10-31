'use strict';
angular.
  module('bookDetailsApp').
  component('bookDetails', {
    templateUrl: 'book-details/book-details.template.html',
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
        self.reserve = function () {
          var newBook = {
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
          self.book = newBook;
          self.rightToReturn = self.userIsAutorized && currentUserName == self.book.reservedBy;
          BookList.editBook(newBook);
        };
        self.return = function () {
          var newBook = {
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
          self.book = newBook;
          self.rightToReturn = self.userIsAutorized && currentUserName == self.book.reservedBy;
          BookList.editBook(newBook);
        }
      }
    ]
  });