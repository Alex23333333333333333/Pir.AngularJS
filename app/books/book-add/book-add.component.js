'use strict';
angular.
  module('booksApp').
  component('addBook', {
    templateUrl: 'books/book-add/book-add.template.html',
    controller: ['BookList', '$scope', 'User',
      function AddBookController(BookList, $scope, User) {
        var self = this;
        self.add = function () {
            var user = User.getCurrentUserName();
            var book = {
              name: $scope.name,
              date: $scope.day,
              publisher: $scope.publisher,
              writer: $scope.writer,
              imgUrl: undefined,
              available: true,
              addedBy: user,
              reservedBy: undefined
            };
            var file = document.getElementById('file').files[0];
            if(file!=undefined)
            {
            const   reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onloadend = function(e) {
                var data = e.target.result;
                book.imgUrl=data;
                BookList.addBook(book);
                alert("Book was added!");
                
              }
              return;
            }
            BookList.addBook(book);
            alert("Book was added!");
            //send your binary data via $http or $resource or do anything else with it
            }
          }
    ]
  });