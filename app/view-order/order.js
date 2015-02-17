'use strict';

angular.module('myApp.view-order', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/order', {
    templateUrl: 'view-order/order.html',
    controller: 'OrderCtrl'
  });
}])

.controller('OrderCtrl', ['$rootScope',function($rootScope) {

}]);