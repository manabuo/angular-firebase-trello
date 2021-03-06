'use strict';

describe('Controller: ShowBoardCtrl', function () {

  // load the controller's module
  beforeEach(module('angularFirebaseTrelloApp'));

  var ShowBoardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShowBoardCtrl = $controller('ShowBoardCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  // TODO: test that users can't be added twice
});
