'use strict';
angular.module('bookListApp').
  component('bookList', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    templateUrl: 'book-list/book-list.template.html',
    controller: ['$http', function BookListcontroller($http) {
    var self = this;
      self.orderProp='name';
      $http.get('Data/books.json').then(function(response) {
        self.books = response.data;
});
}]
  });