angular.
  module('core.book').
  factory('BookList', [
    function () {
      var books = [
        {
          id: 1,
          name: "S",
          date: new Date("2017", "03", "08"),
          publisher: "Publisher",
          Writer: "Writer1",
          imgUrl: "img/book.jpg",
          available: true,
          addedBy: 1

        },
        {
          id: 2,
          name: "S",
          date: new Date("2017", "03", "08"),
          publisher: "Publisher",
          Writer: "Writer1",
          imgUrl: "img/book.jpg",
          available: true,
          addedBy: 1

        },
        {
          id: 3,
          name: "S",
          date: new Date("2017", "03", "08"),
          publisher: "Publisher",
          Writer: "Writer1",
          imgUrl: "img/book.jpg",
          available: true,
          addedBy: 1

        },
        {
          id: 4,
          name: "S",
          date: new Date("2017", "03", "08"),
          publisher: "Publisher",
          Writer: "Writer1",
          imgUrl: "img/book.jpg",
          available: true,
          addedBy: 1

        },
      ];
      var factory = {};

      factory.getBookList = function () {
        
       
        return JSON.parse(localStorage.getItem('bookList'));

      }

      factory.seeding =function(){
        if(JSON.parse(localStorage.getItem('bookList'))==null)
        {
          localStorage.setItem('bookList', JSON.stringify(books));
        }
              
          }

      factory.getBookDetails = function (id) {
        return JSON.parse(localStorage.getItem('bookList')).find(function (item) { return item.id == id });
      }

      factory.editBook = function (id,  newBook) {
        var books = this.getBookList();
        books.find(function (item) { return item.id == id }) = newBook;
      }

      factory.addBook = function (newBook) {
        var books = this.getBookList();
        newBook.id =books.length();
        books.push(newBook);
        localStorage.setItem('bookList', JSON.stringify(books));
      }

      factory.reserve = function (id)
      {
        var books = this.getBookList();
        books.find(function (item) { return item.id == id }).available =false;
      }

      factory.return = function (id)
      {
        var books = this.getBookList();
        books.find(function (item) { return item.id == id }).available =true;
      }

      return factory;
    }
  ]);