'use strict';

angular.module('memoApp')
  .controller('MemoListCtrl', function ($scope, $http) {
    $http.get('memos/memos.json').success(function (data){
      $scope.memos = data;
    });

    $scope.orderProp = 'age';
  })

  .controller('MemoDetailCtrl', function ($scope, $routeParams, $http) {
    $scope.memoId = $routeParams.memoId;

    $http.get('memos/' + $routeParams.memoId + '.json').success(function (data) {
      $scope.memo = data;
    });
  });
