angular.module('libraryApp').factory('authFact',['User', 'ItemsService', function(User, ItemsService){
    var factory={};
    factory.hasRightToEdit=function(id)
    {
     var currentUser = User.getCurrentUserId();
    ItemsService.getItem(id).then((book)=>{return book!=undefined&&currentUser==book.addedBy});
  

    }
    factory.hasRightToAdd=function()
    {
     var currentUser = User.autorized();
     return currentUser!=undefined;

    }
    return factory;
}])