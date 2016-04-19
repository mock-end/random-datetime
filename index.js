'use strict';

var clamp         = require('clamp');
var toInt         = require('to-integer');
var randomNatural = require('random-natural');

function fixme(val, fall) {
  if (typeof val === 'object') {
    if (val.getTime) {
      return val.getTime();
    } else {
      return fall;
    }
  }

  return toInt(val) || fall;
}

module.exports = function (min, max) {

  var start = (new Date(0)).getTime();
  var end   = (new Date(9999, 11, 31, 23, 59, 59)).getTime();

  var length = arguments.length;

  if (length === 0) {
    min = start;
    max = end;
  } else if (length === 1) {
    max = min ? fixme(min, end) : end;
    min = start;
  } else {
    min = min ? fixme(min, start) : start;
    max = max ? fixme(max, end) : end;
  }

  min = clamp(min, start, end);
  max = clamp(max, start, end);

  return new Date(randomNatural(min, max));
};
