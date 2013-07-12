'use strict';

describe('Memo App', function () {

  describe('Memo List View', function () {

    beforeEach(function() {
      browser().navigateTo('../../app/index.html');
    });

    it('should filter the memo list as user types into the search box', function () {
      expect(repeater('.memos li').count()).toBe(3);
    });

  });

});
