'use strict';
angular.
  module('booksApp').
  component('bookDetails', {
    templateUrl: 'books/book-details/book-details.template.html',
    controller: ['$routeParams', 'BookList', 'User', '$scope',
      function BookDetailsController($routeParams, BookList, User, $scope) {
        var self = this;
        var currentUserId = User.getCurrentUserId();

        self.bookId = $routeParams.bookId;
        $scope.bookId = self.bookId;
        BookList.getBookDetails(self.bookId).then((data) => {
          self.book = data;
          self.rightToEdit = self.userIsAutorized && currentUserId == self.book.AddedBy;
          self.rightToReturn = self.userIsAutorized && currentUserId == self.book.ReservedBy;
        });


        self.userIsAutorized = currentUserId != null;

        self.logOut = function () {
          self.userIsAutorized = false;
          self.rightToEdit = false;
          self.rightToReturn = false;
          User.logout();
        };


        self.reserve = function () {
          BookList.changeStatus(self.bookId).then((data) => {
            if (data) {
              self.book.IsAvailable = ! self.book.IsAvailable;
              if(!self.book.IsAvailable)
              {
                self.rightToReturn =true;
              }   
            }
          });
        }
        self.delete = function () {
          BookList.delete(self.bookId);
          $window.location.href = '#!/books';
        }


      }
    ]
  });