'use strict';
angular.
  module('addBookApp').
  component('bookAdd', {
    templateUrl: '/add-book/add-book.template.html',
    controller: ['BookList', '$scope', 'User',
      function AddBookController(BookList, $scope, User) {
        var self = this;
        self.addBook = function()
        {
            var book = {
                name: $scope.name,
                date: $scope.date,
                publisher: $scope.publisher,
                Writer: $scope.Writer,
                imgUrl:$scope.imgUrl,
                available: true,
                addedBy: User.getUser()
              };
            BookList.addBook(book);
        }
        
      }
    ]
  });