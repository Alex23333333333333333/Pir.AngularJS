'use strict';
angular.module('sidebarApp').
component('sidebar', {
  templateUrl: 'sidebar/sidebar.html',
  controller: [ 'User','$scope',
   function SidebarController( User, $scope) {
    $scope.autorized = function () {
      return User.autorized();
    }
    $scope.logout = function () {
      User.logout();
    }
  }]
})