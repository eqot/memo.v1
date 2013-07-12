'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('memoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of memos to the scope', function () {
    expect(scope.memos.length).toBe(3);
  });

  it('should set the default value of orderProp model', function() {
    expect(scope.orderProp).toBe('age');
  });

});
