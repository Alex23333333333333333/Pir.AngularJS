'use strict';
angular.module('bookListApp').
  component('bookList', {  
    templateUrl: 'book-list/book-list.template.html',
    controller: ['BookList', 'User',function BookListcontroller(BookList, User) {
      this.orderProp = 'name';
      BookList.seeding();
      this.books = BookList.getBookList();
      var users =User.seeding();

      this.books = BookList.getBookList();
      this.autorized = User.autorized();
    }]
  })