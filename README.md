# random-datetime

> Generate a random date.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-datetime/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-datetime/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-datetime)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-datetime/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-datetime)


## Install

```
$ npm install --save random-datetime
```

## Usage

```js
var randomDate = require('random-datetime');

// API
// - randomDate([options]);

// options
// - year
// - month
// - day
// - hour
// - minute
// - second
// - millisecond
```

By default, returns an actual [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object:

```js
randomDate();
// => Tue Jun 11 5399 18:47:58 GMT+0800 (CST)
```

Can optionally specify defaults for any of year, month, day, hour, minute, second or millisecond:

```js
randomDate({
    year: 2004,
    month: 4
});
// => Wed Apr 21 2004 10:12:33 GMT+0800 (CST)
```


## Related

- [random-year](https://github.com/mock-end/random-year) - Generate a random year.
- [random-month](https://github.com/mock-end/random-month) - Generate a random month.
- [random-day](https://github.com/mock-end/random-day) - Generate a random day of a month.
- [random-hour](https://github.com/mock-end/random-hour) - Generate a random hour.
- [random-minute](https://github.com/mock-end/random-minute) - Generate a random minute.
- [random-second](https://github.com/mock-end/random-second) - Generate a random second.
- [random-millisecond](https://github.com/mock-end/random-millisecond) - Generate a random millisecond.
- [random-weekday](https://github.com/mock-end/random-weekday) - Generate a random weekday.
- [random-ampm](https://github.com/mock-end/random-ampm) - Return am or pm. Very simple.
- [random-timestamps](https://github.com/mock-end/random-timestamps) - Generate a timestamp. 
- [random-hammertime](https://github.com/mock-end/random-hammertime) - Generate a random hammertime. 

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-datetime/issues/new).
