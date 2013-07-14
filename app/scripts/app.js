'use strict';

angular.module('memoApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/memos', {
        templateUrl: 'views/memo-list.html',
        controller: 'MemoListCtrl'
      })
      .otherwise({
        redirectTo: '/memos'
      });
  });
