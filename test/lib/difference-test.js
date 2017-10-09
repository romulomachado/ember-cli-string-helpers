/* eslint-env node */
'use strict';

let difference = require('../../lib/difference');
let { describe, it } = require('mocha');
let { expect } = require('chai');

describe('difference', function() {
  it('finds the difference between 2 arrays', function() {
    let a = ['foo', 'bar', 'baz'];
    let b = ['bar', 'baz', 'qux'];
    let expectedResult = ['foo'];
    let result = difference(a, b);

    expect(result).to.eql(expectedResult);
  });

  it('finds the difference between 2 arrays', function() {
    let a = ['foo', 'bar', 'baz'];
    let b = ['bar', 'baz', 'qux'];
    let expectedResult = ['qux'];
    let result = difference(b, a);

    expect(result).to.eql(expectedResult);
  });
});
