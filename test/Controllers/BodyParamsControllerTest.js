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

var controller = testerlib.BodyParamsController;
 
var ServerResponse = testerlib.ServerResponse;
var Employee = testerlib.Employee;
var Days = testerlib.Days;
var SuiteCode = testerlib.SuiteCode;

describe('BodyParamsController Tests', function() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Todo Add description for test testSendStringArray
     */ 
    it('should testSendStringArray response', function(done) {
        // Parameters for the API call
        var sarray = ["abc", "def"];

        controller.sendStringArray(sarray, function(error, response, context) {
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
     * Todo Add description for test testSendDynamic
     */ 
    it('should testSendDynamic response', function(done) {
        // Parameters for the API call
        var dynamic = {"uid": "1123213", "name": "Shahid"};

        controller.sendDynamic(dynamic, function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
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
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed":true}, true, true, false));
            done();
        });
    });

});
