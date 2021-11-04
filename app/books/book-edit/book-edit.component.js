'use strict';
angular.
    module('booksApp').
    component('editBook', {
        templateUrl: '/books/book-edit/book-edit.template.html',
        controller: ['BookList', '$scope', 'User', '$routeParams',
            function EditBookController(BookList, $scope, User, $routeParams) {
                var self = this;
                $scope.bookId = $routeParams.bookId;
                $scope.book = BookList.getBookDetails($scope.bookId);
                $scope.day = $scope.book.date;
                $scope.url = $scope.book.imgUrl;
                $scope.publisher = $scope.book.publisher;
                $scope.writer = $scope.book.writer;
                $scope.name = $scope.book.name;


                self.edit = function () {
                    if ($scope.name == undefined) {
                        alert("You cannot make title empty");
                    }
                    else {
                        var book = {
                            id: $scope.bookId,
                            name: $scope.name,
                            date: $scope.day,
                            publisher: $scope.publisher,
                            writer: $scope.writer,
                            imgUrl: $scope.url,
                            available: $scope.book.available,
                            addedBy: $scope.book.addedBy,
                            reservedBy: $scope.book.reservedBy
                        };
                        if (BookList.editBook(book))
                            alert("Book was edit!");
                    }

                }

            }
        ]
    });