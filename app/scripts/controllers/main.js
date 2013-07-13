'use strict';

angular.module('memoApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('memos/memos.json').success(function (data){
      $scope.memos = data;
    });

    $scope.orderProp = 'age';
  });
