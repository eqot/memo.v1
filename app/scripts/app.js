'use strict';

angular.module('memoApp', ['memoFilters', 'memoServices', 'ngSanitize'])
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
      .when('/memos/:memoId/edit', {
        templateUrl: 'views/memo-edit.html',
        controller: 'MemoEditCtrl'
      })
      .otherwise({
        redirectTo: '/memos'
      });
  });
