'use strict';

describe('Directive: scrollto', function () {

  // load the directive's module
  beforeEach(module('mozioApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<scrollto></scrollto>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scrollto directive');
  }));
});
