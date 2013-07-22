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

    var updateTimer = null;
    $scope.update = function () {
      if (updateTimer) {
        clearTimeout(updateTimer);
        updateTimer = null;
      }

      updateTimer = setTimeout(function () {
        save();
      }, 3000);
    };

    function save () {
      console.log('save()');
      var memo = {
        title: $scope.memo.title,
        content: $scope.memo.content
      };
      console.log(memo);
    }
  });
