angular.
  module('core.book').
  factory('BookList', [ '$http',
    function ($http) {
      var books = [];
      var factory = {};

      factory.getBookList = function () {


        return JSON.parse(localStorage.getItem('bookList'));

      }

      factory.seeding = function () {
        if (JSON.parse(localStorage.getItem('bookList')) == null) {
          $http.get('/data/books.json').then(function(response) {
            books = response.data;
            localStorage.setItem('bookList', JSON.stringify(books) )
          });
          
        }

      }

      factory.getBookDetails = function (id) {
        var books = JSON.parse(localStorage.getItem('bookList'));
        var book = books.find(function (item) { return item.id == id });
        return book;
      }

      factory.editBook = function (newBook) {
        var books = this.getBookList();
        var arrId = books.findIndex((item) => item.id == newBook.id);
        books[arrId] = newBook;
        localStorage.setItem('bookList', JSON.stringify(books));
        return true;
      }

      factory.addBook = function (newBook) {
        var books = this.getBookList();
        newBook.id = books.length + 1;
        books.push(newBook);
        localStorage.setItem('bookList', JSON.stringify(books));
      }
      return factory;
    }
  ]);