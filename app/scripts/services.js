'use strict';

angular.module('memoServices', []).
  factory('Memo', function ($http) {
    var DB_URL = '//192.168.33.10:7379/';

    return {
      get: function (id, callback) {
        $http.get(DB_URL + 'GET/' + id).success(function (data) {
          var memo = angular.fromJson(data.GET);
          if (!memo.title) {
            memo.title = '';
          }
          if (!memo.content) {
            memo.content = '';
          }

          if (callback) {
            callback(memo);
          }
        });
      },

      save: function (id, memo, callback) {
        var jsonData = angular.toJson({
          title: memo.title,
          content: memo.content
        }, true);
        // console.log(jsonData);

        $http.put(DB_URL + 'SET/' + id, jsonData).success(function () {
          if (callback) {
            callback();
          }
        });
      }
    };
  });
