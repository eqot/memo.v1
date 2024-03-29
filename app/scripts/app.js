'use strict';

angular.module('memoApp', ['memoFilters', 'memoServices', 'ngSanitize'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/memos', {
        templateUrl: 'views/list.html',
        controller: 'MemoListCtrl'
      })
      .when('/memos/:memoId', {
        templateUrl: 'views/detail.html',
        controller: 'MemoDetailCtrl'
      })
      .otherwise({
        redirectTo: '/memos'
      });
  });
