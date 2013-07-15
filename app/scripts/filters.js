/*global Showdown */

'use strict';

angular.module('memoFilters', [])
  .filter('checkmark', function () {
    return function (input) {
      return input ? '\u2713' : '\u2718';
    };
  })

  .filter('markdown', function () {
    var converter = new Showdown.converter();
    return function (input) {
      if (!input) {
        return null;
      }

      // console.log(input);
      return converter.makeHtml(input);
    };
  });
