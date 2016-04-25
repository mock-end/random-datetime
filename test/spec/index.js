'use strict';

var expect = require('chai').expect;


describe('random-date: ', function () {

  var randomDate = require('../../');

  it('common', function () {

    var count = 100;

    while (count--) {

      expect(randomDate()).to.be.instanceof(Date);
      expect(randomDate({
        year: 2000,
        month: 2,
        day: 20,
        hour: 14,
        minute: 45,
        second: 23,
        millisecond: 789
      }))
        .to.be.instanceof(Date)
        .and
        .eql(new Date(2000, 1, 20, 14, 45, 23, 789));
    }
  });
});
