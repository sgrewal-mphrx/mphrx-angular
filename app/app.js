'use strict';

// Declare app level module which depends on views, and components
angular.module('webconnect', [
  'ngRoute',
  'webconnect.view1',
  'webconnect.view2',
  'webconnect.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
