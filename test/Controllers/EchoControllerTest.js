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

var controller = testerlib.EchoController;
 
var LocalTestException = testerlib.LocalTestException;
var GlobalTestException = testerlib.GlobalTestException;
var SuiteCode = testerlib.SuiteCode;
var Employee = testerlib.Employee;
var Days = testerlib.Days;
var EchoResponse = testerlib.EchoResponse;
var Person = testerlib.Person;
var QueryParameter = testerlib.QueryParameter;
var ServerResponse = testerlib.ServerResponse;


describe('EchoController Tests', function() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Todo Add description for test testJsonEcho
     */ 
    it('should testJsonEcho response', function(done) {
        // Parameters for the API call
        var input = {"uid": "1123213", "name": "Shahid"};

        controller.jsonEcho(input, function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"body": {"uid": "1123213", "name": "Shahid"}}, true, true, false));
            done();
        });
    });

});
