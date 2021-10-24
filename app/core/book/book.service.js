angular.
  module('core.book').
  factory('Book', ['$resource',
    function($resource) {
      return $resource('Data/books.json', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);