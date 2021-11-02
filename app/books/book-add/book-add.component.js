'use strict';
angular.
  module('booksApp').
  component('addBook', {
    templateUrl: 'books/book-add/book-add.template.html',
    controller: ['BookList', '$scope', 'User',
      function AddBookController(BookList, $scope, User) {
        var self = this;
        self.add = function () {
          if ($scope.name == undefined) {
            alert("You cannot make title empty");
          }
          else {
            var user = User.getCurrentUserName();
            if (user == undefined) {
              alert("No permissions for this action");
            }
            else {

              var book = {
                name: $scope.name,
                date: $scope.day,
                publisher: $scope.publisher,
                writer: $scope.writer,
                imgUrl: $scope.url,
                available: true,
                addedBy: user,
                reservedBy: undefined
              };
              BookList.addBook(book);
              alert("Book was added!");
            }

          }

        }

      }
    ]
  });