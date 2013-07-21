'use strict';

angular.module('memoApp')
  .controller('MemoDetailCtrl', function ($scope, $routeParams, Memo) {
    $scope.memoId = $routeParams.memoId;
    $scope.memo = Memo.get({memoId: $routeParams.memoId});
  });
