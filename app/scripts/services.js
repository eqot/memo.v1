'use strict';

angular.module('memoServices', ['ngResource']).
  factory('Memo', function ($resource) {
    return $resource('memos/:memoId.json', {}, {
      query: {method: 'GET', params: {memoId: 'memos'}, isArray: true}
    });
  });
