angular.module('libraryApp').factory('authFact',['User', 'BookList', function(User, BookList){
    var factory={};
    factory.hasRightToEdit=function(id)
    {
     var currentUser = User.getCurrentUserId();
    BookList.getBookDetails(id).then((book)=>{return book!=undefined&&currentUser==book.addedBy});
  

    }
    factory.hasRightToAdd=function()
    {
     var currentUser = User.autorized();
     return currentUser!=undefined;

    }
    return factory;
}])