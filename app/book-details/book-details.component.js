angular.
  module('bookDetailsApp').
  component('bookDetails', {
    template: 'BookId: <span>{{$ctrl.bookId}}</span>',
    controller: ['$routeParams',
      function BookDetailsController($routeParams) {
        this.bookId = $routeParams.bookId;
      }
    ]
  });