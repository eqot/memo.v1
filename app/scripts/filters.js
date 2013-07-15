'use strict';

angular.module('memoFilters', [])
  .filter('checkmark', function () {
    return function (input) {
      return input ? '\u2713' : '\u2718';
    };
  })

  .filter('markdown', function () {
    return function (input) {
      return input;
    };
  });
