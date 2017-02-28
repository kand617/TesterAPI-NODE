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

var controller = testerlib.ErrorCodesController;
 
var LocalTestException = testerlib.LocalTestException;
var GlobalTestException = testerlib.GlobalTestException;
var SuiteCode = testerlib.SuiteCode;
var Employee = testerlib.Employee;
var Days = testerlib.Days;
var EchoResponse = testerlib.EchoResponse;
var Person = testerlib.Person;
var QueryParameter = testerlib.QueryParameter;
var ServerResponse = testerlib.ServerResponse;


describe('ErrorCodesController Tests', function() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Todo Add description for test testGet400
     */ 
    it('should testGet400 response', function(done) {
        
        controller.get400(function(error, response, context) {
            // Test response code
            assert.equal(400, context.response.statusCode);
            done();
        });
    });

    /**
     * Todo Add description for test testGet500
     */ 
    it('should testGet500 response', function(done) {
        
        controller.get500(function(error, response, context) {
            // Test response code
            assert.equal(500, context.response.statusCode);
            done();
        });
    });

});
