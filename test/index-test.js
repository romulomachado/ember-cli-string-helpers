/* eslint-env node */
'use strict';

let emberStringHelpersIndex = require('../index');
let { describe, it } = require('mocha');
let { expect } = require('chai');

describe('index', function() {
  describe('#exclusionFilter', function() {
    it('should return `true` if a file is in the blacklist', function() {
      let name = 'camelize';
      let dummyRegex = new RegExp('.*');
      let lists = {
        blacklist: ['camelize', 'capitalize']
      };
      let result = emberStringHelpersIndex.exclusionFilter(name, dummyRegex, lists);

      expect(result).to.be.true;
    });

    it('should return `false` if a file is not in the blacklist', function() {
      let name = 'classify';
      let dummyRegex = new RegExp('.*');
      let lists = {
        blacklist: ['dasherize', 'html-safe']
      };
      let result = emberStringHelpersIndex.exclusionFilter(name, dummyRegex, lists);

      expect(result).to.be.false;
    });

    it('should return `false` if a file is in the whitelist', function() {
      let name = 'titleize';
      let dummyRegex = new RegExp('.*');
      let lists = {
        whitelist: ['titleize', 'truncate']
      };
      let result = emberStringHelpersIndex.exclusionFilter(name, dummyRegex, lists);

      expect(result).to.be.false;
    });

    it('should return `false` if a file is in both the whitelist and blacklist', function() {
      let name = 'w';
      let dummyRegex = new RegExp('.*');
      let lists = {
        blacklist: ['w'],
        whitelist: ['w', 'camelize']
      };
      let result = emberStringHelpersIndex.exclusionFilter(name, dummyRegex, lists);

      expect(result).to.be.false;
    });

    it('should return `false` if both lists are empty', function() {
      let name = 'camelize';
      let dummyRegex = new RegExp('.*');
      let lists = {};
      let result = emberStringHelpersIndex.exclusionFilter(name, dummyRegex, lists);

      expect(result).to.be.false;
    });
  });

  describe('#generateWhitelist', function() {
    it('should return files to whitelist when both `only` and `expect` are defined' , function() {
      let dummyConfig = {
        only: ['capitalize', 'classify', 'dasherize', 'html-safe'],
        except: ['titleize']
      };
      let expectedResult = ['capitalize', 'classify', 'dasherize', 'html-safe'];
      let result = emberStringHelpersIndex.generateWhitelist(dummyConfig);

      expect(result).to.eql(expectedResult);
    });

    it('should return files to whitelist when `only` is defined' , function() {
      let dummyConfig = {
        only: ['camelize', 'capitalize', 'classify', 'dasherize']
      };
      let expectedResult = ['camelize', 'capitalize', 'classify', 'dasherize'];
      let result = emberStringHelpersIndex.generateWhitelist(dummyConfig);

      expect(result).to.eql(expectedResult);
    });
  });

  describe('#generateBlacklist', function() {
    it('should return files to blacklist when both `only` and `expect` are defined' , function() {
      let dummyConfig = {
        only: ['html-safe', 'titleize', 'truncate', 'underscore'],
        except: ['truncate']
      };
      let expectedResult = ['truncate'];
      let result = emberStringHelpersIndex.generateBlacklist(dummyConfig);

      expect(result).to.eql(expectedResult);
    });

    it('should return files to blacklist when `except` is defined' , function() {
      let dummyConfig = {
        except: ['camelize', 'capitalize', 'classify', 'dasherize']
      };
      let expectedResult = ['camelize', 'capitalize', 'classify', 'dasherize'];
      let result = emberStringHelpersIndex.generateBlacklist(dummyConfig);

      expect(result).to.eql(expectedResult);
    });
  });
});
