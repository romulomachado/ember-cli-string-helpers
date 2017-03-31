/* globals describe, it */
/* jshint node: true, esnext: false, expr: true */
/* jscs: disable */
'use strict';

var emberStringHelpersIndex = require('../index');
var expect = require('chai').expect;

describe('index', function() {
  describe('#exclusionFilter', function() {
    it('should return `true` if a file is in the blacklist', function() {
      var name = 'camelize';
      var dummyRegex = new RegExp('.*');
      var lists = {
        blacklist: ['camelize', 'capitalize']
      };
      var result = emberStringHelpersIndex.exclusionFilter(name, dummyRegex, lists);

      expect(result).to.be.true;
    });

    it('should return `false` if a file is not in the blacklist', function() {
      var name = 'classify';
      var dummyRegex = new RegExp('.*');
      var lists = {
        blacklist: ['dasherize', 'html-safe']
      };
      var result = emberStringHelpersIndex.exclusionFilter(name, dummyRegex, lists);

      expect(result).to.be.false;
    });

    it('should return `false` if a file is in the whitelist', function() {
      var name = 'titleize';
      var dummyRegex = new RegExp('.*');
      var lists = {
        whitelist: ['titleize', 'truncate']
      };
      var result = emberStringHelpersIndex.exclusionFilter(name, dummyRegex, lists);

      expect(result).to.be.false;
    });

    it('should return `false` if a file is in both the whitelist and blacklist', function() {
      var name = 'w';
      var dummyRegex = new RegExp('.*');
      var lists = {
        blacklist: ['w'],
        whitelist: ['w', 'camelize']
      };
      var result = emberStringHelpersIndex.exclusionFilter(name, dummyRegex, lists);

      expect(result).to.be.false;
    });

    it('should return `false` if both lists are empty', function() {
      var name = 'camelize';
      var dummyRegex = new RegExp('.*');
      var lists = {};
      var result = emberStringHelpersIndex.exclusionFilter(name, dummyRegex, lists);

      expect(result).to.be.false;
    });
  });

  describe('#generateWhitelist', function() {
    it('should return files to whitelist when both `only` and `expect` are defined' , function() {
      var dummyConfig = {
        only: ['capitalize', 'classify', 'dasherize', 'html-safe'],
        except: ['titleize']
      };
      var expectedResult = ['capitalize', 'classify', 'dasherize', 'html-safe'];
      var result = emberStringHelpersIndex.generateWhitelist(dummyConfig);

      expect(result).to.eql(expectedResult);
    });

    it('should return files to whitelist when `only` is defined' , function() {
      var dummyConfig = {
        only: ['camelize', 'capitalize', 'classify', 'dasherize']
      };
      var expectedResult = ['camelize', 'capitalize', 'classify', 'dasherize'];
      var result = emberStringHelpersIndex.generateWhitelist(dummyConfig);

      expect(result).to.eql(expectedResult);
    });
  });

  describe('#generateBlacklist', function() {
    it('should return files to blacklist when both `only` and `expect` are defined' , function() {
      var dummyConfig = {
        only: ['html-safe', 'titleize', 'truncate', 'underscore'],
        except: ['truncate']
      };
      var expectedResult = ['truncate'];
      var result = emberStringHelpersIndex.generateBlacklist(dummyConfig);

      expect(result).to.eql(expectedResult);
    });

    it('should return files to blacklist when `except` is defined' , function() {
      var dummyConfig = {
        except: ['camelize', 'capitalize', 'classify', 'dasherize']
      };
      var expectedResult = ['camelize', 'capitalize', 'classify', 'dasherize'];
      var result = emberStringHelpersIndex.generateBlacklist(dummyConfig);

      expect(result).to.eql(expectedResult);
    });
  });
});
/* jscs:enable */
