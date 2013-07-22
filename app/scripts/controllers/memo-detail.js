'use strict';

angular.module('memoApp')
  .controller('MemoDetailCtrl', function ($scope, $routeParams, $http, $location) {
    $scope.memoId = $routeParams.memoId;

    $scope.urlEdit = $location.absUrl() + '/edit';

    $http.get('//192.168.33.10:7379/GET/' + $scope.memoId).success(function (data) {
      var memo = JSON.parse(data.GET);
      $scope.memo = {
        title: memo.title || '',
        content: memo.content || ''
      };
    });
  });
