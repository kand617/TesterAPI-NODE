/*
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */
var assert = require('chai').assert;
var TestHelper = require('../TestHelper');
var APIHelper = require('../../lib/APIHelper');
var testerlib = require('../../lib');
var testConfiguration = require('../TestBootstrap');

var controller = testerlib.QueryParamController;
 
var ServerResponse = testerlib.ServerResponse;
var SuiteCode = testerlib.SuiteCode;
var Days = testerlib.Days;

describe('QueryParamController Tests', function() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Todo Add description for test testNoParams
     */ 
    it('should testNoParams response', function(done) {
        
        controller.noParams(function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed":true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testStringParam
     */ 
    it('should testStringParam response', function(done) {
        // Parameters for the API call
        var string = "l;asd;asdwe[2304&&;'.d??\\a\\\\\\;sd//";

        controller.stringParam(string, function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed":true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testUrlParam
     */ 
    it('should testUrlParam response', function(done) {
        // Parameters for the API call
        var url = "https://www.shahidisawesome.com/and/also/a/narcissist?thisis=aparameter&another=one";

        controller.urlParam(url, function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed":true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testIntegerEnumArray
     */ 
    it('should testIntegerEnumArray response', function(done) {
        // Parameters for the API call
        var suites = [1, 3, 4, 2, 3];

        controller.integerEnumArray(suites, function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed":true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testNumberArray
     */ 
    it('should testNumberArray response', function(done) {
        // Parameters for the API call
        var integers = [1,2,3,4,5];

        controller.numberArray(integers, function(error, response, context) {
 
            // Test response code
            assert.isAtLeast(context.response.statusCode, 200);
            assert.isAtMost(context.response.statusCode, 208)
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed":true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testStringArray
     */ 
    it('should testStringArray response', function(done) {
        // Parameters for the API call
        var strings = ["abc", "def"];

        controller.stringArray(strings, function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed":true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testStringEnumArray
     */ 
    it('should testStringEnumArray response', function(done) {
        // Parameters for the API call
        var days = ["Tuesday", "Saturday", "Wednesday", "Monday", "Sunday"];

        controller.stringEnumArray(days, function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed":true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSimpleQuery
     */ 
    it('should testSimpleQuery response', function(done) {
        // Parameters for the API call
        var mboolean = true;
        var number = 4;
        var string = "TestString";

        // key-value map for optional query parameters
        var queryParams = [];

        controller.simpleQuery(mboolean, number, string, null, function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed":true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testMultipleParams
     */ 
    it('should testMultipleParams response', function(done) {
        // Parameters for the API call
        var number = 123412312;
        var precision = 1112.34;
        var string = "\"\"test./;\";12&&3asl\"\";\"qw1&34\"///..//.";
        var url = "http://www.abc.com/test?a=b&c=\"http://lolol.com?param=no&another=lol\"";

        controller.multipleParams(number, precision, string, url, function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed":true}, true, true, false));
            done();
        });
    });

});
