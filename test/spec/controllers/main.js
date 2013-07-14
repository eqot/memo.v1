'use strict';

describe('Controller: MemoListCtrl', function () {

  // load the controller's module
  beforeEach(module('memoApp'));

  var scope, ctrl, $httpBackend;

  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('memos/memos.json').
    respond([
      {title: 'Memo 0'},
      {title: 'Memo 1'}
    ]);

    scope = $rootScope.$new();
    ctrl = $controller('MemoListCtrl', {$scope: scope});
  }));

  it('should create "memos" model with 2 memos fetched from xhr', function() {
    expect(scope.memos).toBeUndefined();
    $httpBackend.flush();

    expect(scope.memos).toEqual([
      {title: 'Memo 0'},
      {title: 'Memo 1'}
    ]);
  });

  it('should set the default value of orderProp model', function() {
    expect(scope.orderProp).toBe('age');
  });

});
