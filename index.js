'use strict';

var randomYear        = require('random-year');
var randomMonth       = require('random-month');
var randomDay         = require('random-day');
var randomHour        = require('random-hour');
var randomMinute      = require('random-minute');
var randomSecond      = require('random-second');
var randomMillisecond = require('random-millisecond');


module.exports = function (options) {

  options = options || {};

  var year        = options.year || randomYear();
  var month       = options.month || randomMonth();
  var day         = options.day || randomDay();
  var hour        = options.hour || randomHour({ twentyFour: true });
  var minute      = options.minute || randomMinute();
  var second      = options.second || randomSecond();
  var millisecond = options.millisecond || randomMillisecond();

  return new Date(year, month - 1, day, hour, minute, second, millisecond);
};
