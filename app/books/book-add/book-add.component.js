'use strict';
angular.
  module('booksApp').
  component('addBook', {
    templateUrl: 'books/book-add/book-add.template.html',
    controller: ['BookList', '$scope', 'User',
      function AddBookController(BookList, $scope, User) {
        var self = this;
        self.add = function () {
            var book = {
              Name: $scope.name,
              Date: $scope.day,
              Publisher: $scope.publisher,
              Writer: $scope.writer,
              ImgUrl: undefined
            };

            var file = document.getElementById('file').files[0];
            if(file!=undefined)
            {
            const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onloadend = function(e) {
                var data = e.target.result;
                book.imgUrl=data;
                BookList.addBook(book);

                
              }
              document.getElementById("addForm").reset();
              return;
            }
            document.getElementById("addForm").reset();
            BookList.addBook(book);
            //send your binary data via $http or $resource or do anything else with it
            }
          }
    ]
  });