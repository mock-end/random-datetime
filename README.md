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

> For more use-cases see the [tests](https://github.com/mock-end/random-datetime/blob/master/test/spec/index.js)


```js
var randomDate = require('random-datetime');

// randomDate(min, max);
// => return a Date object.

randomDate();
// => Tue Jun 11 5399 18:47:58 GMT+0800 (CST)

randomNatural(new Date());
randomNatural((new Date()).getTime());
// => Sat Oct 04 2003 16:27:06 GMT+0800 (CST)

var now = (new Date()).getTime();
randomNatural(now - 100000, now + 100000);
// => Wed Apr 21 2004 10:12:33 GMT+0800 (CST)
```

## Related

- [random-integral](https://github.com/mock-end/random-integral) - Generate a random integer.
- [random-natural](https://github.com/mock-end/random-natural) - Generate a random natural number.
- [random-decimal](https://github.com/mock-end/random-decimal) - Generate a random decimal.
- [random-index](https://github.com/mock-end/random-index) - Generate a random array-like index.
- [random-binary](https://github.com/mock-end/random-binary) - Generate a random binary number.
- [random-octal](https://github.com/mock-end/random-octal) - Generate a random octal.
- [random-hexadecimal](https://github.com/mock-end/random-hexadecimal) - Generate a random hexadecimal number.
- [random-unicode](https://github.com/mock-end/random-unicode) - Generate a random unicode.
- [random-bool](https://github.com/mock-end/random-bool) - Generate a random boolean (true/false).
- [random-char](https://github.com/mock-end/random-char) - Generate a random char.
- [random-lorem](https://github.com/mock-end/random-lorem) - Generate a random world.
- [random-title](https://github.com/mock-end/random-title) - Generate a random title.
- [random-sentence](https://github.com/mock-end/random-sentence) - Generate a random sentence.
- [random-paragraph](https://github.com/mock-end/random-paragraph) - Generate a random paragraph.
- [random-tld](https://github.com/mock-end/random-tld) - Return a random tld.
- [random-domains](https://github.com/mock-end/random-domains) - Generate a random domain name.
- [random-uri](https://github.com/mock-end/random-uri.git) - Generate a random url.
- [random-email](https://github.com/mock-end/random-email) - Generate a random email.
- [random-lang](https://github.com/mock-end/random-lang) - Return a random language name.
- [random-mobile](https://github.com/mock-end/random-mobile) - Generate a random chinese mobile phone number.
- [random-zipcode](https://github.com/mock-end/random-zipcode) - Generate a random chinese zipcode.
- [random-ipv4](https://github.com/mock-end/random-ipv4) - Generate a random ipv4 address.
- [random-ipv6](https://github.com/mock-end/random-ipv6) - Generate a random ipv6 address.
- [random-color](https://github.com/mock-end/random-color) - Generate a random color.
- [random-uuid](https://github.com/mock-end/random-uuid) - Generate a random uuid.
- [random-identity](https://github.com/mock-end/random-identity) - Generate a random ID.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-datetime/issues/new).
