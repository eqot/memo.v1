'use strict';

angular.module('memoApp')
  .controller('MemoListCtrl', function ($scope, Memo) {
    $scope.memos = Memo.query();
    $scope.orderProp = 'age';
  })

  .controller('MemoDetailCtrl', function ($scope, $routeParams, Memo) {
    $scope.memoId = $routeParams.memoId;
    $scope.memo = Memo.get({memoId: $routeParams.memoId});
  });
