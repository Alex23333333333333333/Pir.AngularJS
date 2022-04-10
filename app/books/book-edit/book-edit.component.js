'use strict';
angular.
    module('booksApp').
    component('editBook', {
        templateUrl: '/books/book-edit/book-edit.template.html',
        controller: ['BookList', '$scope', 'User', '$routeParams',
            function EditBookController(BookList, $scope, User, $routeParams) {
                var self = this;
                $scope.bookId = $routeParams.bookId;
                $scope.book = BookList.getBookDetails($scope.bookId).then((book)=>{
                    $scope.day = new Date(book.Date);
                    $scope.url =book.ImgUrl;
                    $scope.publisher =book.Publisher;
                    $scope.writer = book.Writer;
                    $scope.name = book.Name;
                });
              
                self.edit = function () {

                    var book = {
                        Name: $scope.name,
                        Date: $scope.day,
                        Publisher: $scope.publisher,
                        Writer: $scope.writer,
                        ImgUrl: $scope.url,
                    };
                    var file = document.getElementById('file').files[0];
                    if (file != undefined) {
                       const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onloadend = function (e) {
                            var data = e.target.result;
                            book.imgUrl = data;
                            BookList.editBook(  $scope.bookId, book);
                                   
                        }
                        return;
                    }
                  BookList.editBook( $scope.bookId, book);
                        
                }
            }
        ]
    });