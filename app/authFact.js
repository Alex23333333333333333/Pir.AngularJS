angular.module('libraryApp').factory('authFact',['User', 'BookList', function(User, BookList){
    var factory={};
    factory.hasRightToEdit=function(id)
    {
     var currentUser = User.getCurrentUserName();
     var book = BookList.getBookDetails(id);
     return book!=undefined&&currentUser==book.addedBy;

    }
    factory.hasRightToAdd=function()
    {
     var currentUser = User.getCurrentUserName();
     return currentUser!=undefined;

    }
    return factory;
}])