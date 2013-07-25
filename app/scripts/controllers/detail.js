'use strict';

angular.module('memoApp')
  .controller('MemoDetailCtrl', function ($scope, $routeParams, Memo) {
    var id = $routeParams.memoId;

    $scope.editable = false;
    $scope.saved = true;

    Memo.get(id, function (memo) {
      $scope.memo = memo;
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
      Memo.save(id, $scope.memo, function () {
        // console.log('saved.');
        $scope.saved = true;
      });
    }
  });
