'use strict';

angular.module('memoApp')
  .controller('MemoDetailCtrl', function ($scope, $routeParams, $http) {
    $scope.memoId = $routeParams.memoId;

    $http.get('//192.168.33.10:7379/GET/' + $scope.memoId).success(function (data) {
      $scope.memo = data.GET || {
        title: '',
        content: ''
      };
    });
  });
