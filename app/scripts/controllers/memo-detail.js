'use strict';

angular.module('memoApp')
  .controller('MemoDetailCtrl', function ($scope, $routeParams, $http) {
    $scope.memoId = $routeParams.memoId;

    $scope.saved = true;

    $http.get('//192.168.33.10:7379/GET/' + $scope.memoId).success(function (data) {
      var memo = JSON.parse(data.GET);
      $scope.memo = {
        title: memo.title || '',
        content: memo.content || ''
      };
    });

    var updateTimer = null;
    $scope.update = function () {
      $scope.saved = false;

      if (updateTimer) {
        clearTimeout(updateTimer);
        updateTimer = null;
      }

      updateTimer = setTimeout(function () {
        save();
      }, 3000);
    };

    function save () {
      var memo = {
        title: $scope.memo.title,
        content: $scope.memo.content
      };
      var jsonData = JSON.stringify(memo);
      // console.log(jsonData);
      $http.get('//192.168.33.10:7379/SET/' + $scope.memoId + '/' + jsonData).success(function () {
        // console.log('saved.');
        $scope.saved = true;
      });
    }
  });
