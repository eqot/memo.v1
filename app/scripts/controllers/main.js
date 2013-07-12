'use strict';

angular.module('memoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.memos = [
      {title: 'memo1', content: 'This is a test 1.'},
      {title: 'memo2', content: 'This is a test 2.'},
      {title: 'memo3', content: 'This is a test 3.'}
    ];
  });
