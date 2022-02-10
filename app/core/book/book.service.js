angular.
  module('core.book').
  factory('BookList', ['$http', '$location',
    function ($http, $location) {
      var books = [];
      var factory = {};

      factory.getBookList = function () {
        return $http.get('https://localhost:44378/api/Books').then(function successCallback(response) {
          return response.data;
        }, function errorCallback(response) {
    
        });
      };

      factory.getBookDetails = function (id) {
        return $http({
          method: 'GET',
          url: 'https://localhost:44378/api/books/',
          params: { id: id }
        }).then(function successCallback(response) {
          return response.data;
        }, function errorCallback(response) {
          
        });
      }

      factory.editBook = function (id, newBook) {
        $http.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('JWT');
        var url = 'https://localhost:44378/api/Books/' + id
        return $http.put(url, JSON.stringify(newBook)).then(function successCallback(response) {

          alert("The book was succeddfully edited");
        }, function errorCallback(response) {
          {
            
          }
        });
      }



      factory.changeStatus = function (id) {
    
        return $http({
          method: 'PATCH',
          url: 'https://localhost:44378/api/books/',
          params: { id: id }
        }).then(function successCallback(response) {
          return true;
        }, function errorCallback(response) {
         

        });
      }

      factory.addBook = function (newBook) {
        $http.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('JWT');
        return $http.post('https://localhost:44378/api/books/', JSON.stringify(newBook)).then(function successCallback(response) {

          alert("The book was succeddfully added");
        }, function errorCallback(response) {
          
           
        });
      }
      factory.delete = function (id) {
        $http.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('JWT');
        return $http({
          method: 'DELETE',
          url: 'https://localhost:44378/api/books/',
          params: { id: id }
        }).then(function successCallback(response) {
          alert("Book was successfully deleted")
          $location.path('/');

        }, function errorCallback(response) {
          
      });}
      return factory;
    }

  ]);