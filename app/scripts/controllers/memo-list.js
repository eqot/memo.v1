'use strict';

angular.module('memoApp')
  .controller('MemoListCtrl', function ($scope, Memo) {
    $scope.memos = Memo.query();
    $scope.orderProp = 'age';
  });
