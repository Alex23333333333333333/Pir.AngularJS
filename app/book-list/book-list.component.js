'use strict';
angular.module('bookListApp').
  component('bookList', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    templateUrl: 'book-list/book-list.template.html',
    controller: ['Book', function BookListcontroller(Book) {
      this.orderProp = 'name';
      this.books = Book.query();
    }]
  })