'use strict';

angular.module('memoApp')
  .controller('MemoDetailCtrl', function ($scope, $routeParams, $http) {
    $scope.memoId = $routeParams.memoId;

    $scope.editable = false;
    $scope.saved = true;

    $http.get('//192.168.33.10:7379/GET/' + $scope.memoId).success(function (data) {
      var memo = angular.fromJson(data.GET);
      $scope.memo = {
        title: memo.title || '',
        content: memo.content || ''
      };
    });

    $scope.setEditable = function (flag) {
      $scope.editable = flag;

      if (!flag) {
        cancelLazySave();
        doSave();
      }
    };

    var saveTimer = null;
    $scope.lazySave = function () {
      $scope.saved = false;

      cancelLazySave();

      saveTimer = setTimeout(function () {
        saveTimer = null;
        doSave();
      }, 3000);
    };

    function cancelLazySave () {
      if (saveTimer) {
        clearTimeout(saveTimer);
        saveTimer = null;
      }
    }

    function doSave () {
      var memo = {
        title: $scope.memo.title,
        content: $scope.memo.content
      };
      var jsonData = angular.toJson(memo, true);
      // console.log(jsonData);
      $http.put('//192.168.33.10:7379/SET/' + $scope.memoId, jsonData).success(function () {
        // console.log('saved.');
        $scope.saved = true;
      });
    }
  });
