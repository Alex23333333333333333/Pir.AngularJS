'use strict';
angular.module('booksApp').
  component('bookList', {
    templateUrl: 'books/book-list/book-list.template.html',
    controller: ['BookList', function BookListcontroller(BookList) {
      this.orderProp = 'name';
      var self = this;
      BookList.getBookList().then(
        (data)=> {self.books=data;}
        );
    }]
  })