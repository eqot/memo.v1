'use strict';

angular.module('memoApp', ['memoFilters'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/memos', {
        templateUrl: 'views/memo-list.html',
        controller: 'MemoListCtrl'
      })
      .when('/memos/:memoId', {
        templateUrl: 'views/memo-detail.html',
        controller: 'MemoDetailCtrl'
      })
      .otherwise({
        redirectTo: '/memos'
      });
  });
