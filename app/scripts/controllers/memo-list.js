'use strict';

angular.module('memoApp')
  .controller('MemoListCtrl', function ($scope, $http) {
    $http.get('//192.168.33.10:7379/GET/memos').success(function (data) {
      $scope.memos = data.GET || [];
    });

    $scope.orderProp = 'age';

    $scope.createMemo = function () {
      $scope.memos.push({
        key: 'memo_' + $scope.memos.length
      });
    };
  });
