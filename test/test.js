'use strict';
const assert = require('assert');

describe('Flipp Flyer Affinity', function() {
  describe('sumOverTime', function() {
    const now = new Date();
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    it('should should add values', function() {
      const sumRows = model.sumOverTime(
          [
            {c1: 10, c2: 100, date: now},
            {c1: 20, c2: 300, date: now},
          ],
          ['c1','c2']
      );
      assert.equal(30, 30);
      assert.equal(300, 300);
    });
  });
});


