/* eslint-env node */
'use strict';

let intersection = require('../../lib/intersection');
let { describe, it } = require('mocha');
let { expect } = require('chai');

describe('intersection', function() {
  it('finds the intersection between 2 arrays', function() {
    let a = ['foo', 'bar', 'baz'];
    let b = ['bar', 'baz', 'qux'];
    let expectedResult = ['bar', 'baz'];
    let result = intersection(a, b);

    expect(result).to.eql(expectedResult);
  });

  it('finds the intersection between 2 arrays', function() {
    let a = ['foo', 'bar', 'baz'];
    let b = ['bar', 'baz', 'qux'];
    let expectedResult = ['bar', 'baz'];
    let result = intersection(b, a);

    expect(result).to.eql(expectedResult);
  });
});
