'use strict';
angular.module('bookListApp').
  component('bookList', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    templateUrl: 'book-list/book-list.template.html',
    controller: function BookListcontroller() {
        this.books = [
            {
              name: 'Book1',
              Date: new Date('2014', '03', '08'),
              Publisher: 'Publisher1',
              Writer: 'Writer1'
        
            }, 
            {
              name: 'Book2',
              Date: new Date('2014', '03', '08'),
              Publisher: 'Publisher2',
              Writer: 'Writer2'
        
            },
            {
              name: 'Book3',
              Date: new Date('2014', '03', '08'),
              Publisher: 'Publisher3',
              Writer: 'Writer3'
        
            },
            {
              name: 'Book4',
              Date: new Date('2014', '03', '08'),
              Publisher: 'Publisher4',
              Writer: 'Writer4'
        
            },
            {
              name: 'Book5',
              Date: new Date('2014', '03', '08'),
              Publisher: 'Publisher5',
              Writer: 'Writer5'
        
            }
          ];
    }
  });