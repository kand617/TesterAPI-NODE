/*
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */
var assert = require('chai').assert;
var TestHelper = require('../TestHelper');
var APIHelper = require('../../lib/APIHelper');
var testerlib = require('../../lib');
var config = require('../../lib/Configuration');
var testConfiguration = require('../TestBootstrap');

var controller = testerlib.FormParamsController;
 
var ServerResponse = testerlib.ServerResponse;
var SuiteCode = testerlib.SuiteCode;
var Days = testerlib.Days;
var Employee = testerlib.Employee;

describe('FormParamsController Tests', function() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Todo Add description for test testSendLong
     */ 
    it('should testSendLong response', function(done) {
        // Parameters for the API call
        var value = 5147483647;

        controller.sendLong(value, function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed":true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSendString
     */ 
    it('should testSendString response', function(done) {
        // Parameters for the API call
        var value = "TestString";

        controller.sendString(value, function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed":true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSendIntegerArray
     */ 
    it('should testSendIntegerArray response', function(done) {
        // Parameters for the API call
        var integers = [1,2,3,4,5];

        controller.sendIntegerArray(integers, function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed":true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSendStringArray
     */ 
    it('should testSendStringArray response', function(done) {
        // Parameters for the API call
        var strings = ["abc", "def"];

        controller.sendStringArray(strings, function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed":true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSendIntegerEnumArray
     */ 
    it('should testSendIntegerEnumArray response', function(done) {
        // Parameters for the API call
        var suites = [1, 3, 4, 2, 3];

        controller.sendIntegerEnumArray(suites, function(error, response, context) {
 
            // Test response code
            assert.isAtLeast(context.response.statusCode, 200);
            assert.isAtMost(context.response.statusCode, 208)
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed":true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSendStringEnumArray
     */ 
    it('should testSendStringEnumArray response', function(done) {
        // Parameters for the API call
        var days = ["Tuesday", "Saturday", "Wednesday", "Monday", "Sunday"];

        controller.sendStringEnumArray(days, function(error, response, context) {
 
            // Test response code
            assert.isAtLeast(context.response.statusCode, 200);
            assert.isAtMost(context.response.statusCode, 208)
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed":true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSendFile
     */ 
    it('should testSendFile response', function(done) {
        TestHelper.getFilePath("https://dl.dropboxusercontent.com/u/31838656/binary.png", function(data) {
        // Parameters for the API call
        var file = data;

                    controller.sendFile(file, function(error, response, context) {
                // Test response code
                assert.equal(200, context.response.statusCode);
                assert.isNotNull(response);
                assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed":true}, true, true, false));
                done();
            });
        });
    });

});
