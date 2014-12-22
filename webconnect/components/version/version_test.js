'use strict';

describe('webconnect.version module', function() {
  beforeEach(module('webconnect.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
