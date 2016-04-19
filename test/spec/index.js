'use strict';

var expect = require('chai').expect;


describe('random-date: ', function () {

  var randomDate = require('../../');

  it('common', function () {

    var now   = (new Date).getTime();
    var start = (new Date(0)).getTime();
    var end   = (new Date(9999, 11, 31, 23, 59, 59)).getTime();
    var date  = randomDate();

    expect(date).to.be.instanceof(Date);
    expect(date.getTime()).to.be.within(start, end);

    expect(randomDate({}).getTime()).to.be.within(start, end);
    expect(randomDate(0).getTime()).to.be.within(start, end);
    expect(randomDate('0').getTime()).to.be.within(start, end);

    expect(randomDate(new Date()).getTime()).to.be.within(start, +new Date);
    expect(randomDate((new Date()).getTime()).getTime()).to.be.within(start, +new Date);


    expect(randomDate(0, 0).getTime()).to.be.within(start, end);

    expect(randomDate(now - 1000, now + 1000).getTime()).to.be.within(now - 1000, now + 1000);

    console.log(randomDate(now - 100000))
  });
});
