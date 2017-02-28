/*
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */
var assert = require('chai').assert;
var moment = require('moment');
var TestHelper = require('../TestHelper');
var APIHelper = require('../../lib/APIHelper');
var testerlib = require('../../lib');
var config = require('../../lib/Configuration');
var testConfiguration = require('../TestBootstrap');

var controller = testerlib.ResponseTypesController;
 
var Employee = testerlib.Employee;
var Days = testerlib.Days;
var SuiteCode = testerlib.SuiteCode;

describe('ResponseTypesController Tests', function() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Todo Add description for test testGetInteger
     */ 
    it('should testGetInteger response', function(done) {
        
        controller.getInteger(function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
 
            //not an array, do simple check
            assert.equal(4, response);
            done();
        });
    });

    /**
     * Todo Add description for test testGetIntegerArray
     */ 
    it('should testGetIntegerArray response', function(done) {
        
        controller.getIntegerArray(function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            //this means it is a primitive array
            var expected = [1,2,3,4,5];

            assert.equal(TestHelper.isListProperSubsetOf(response, expected, true, false), true);
            done();
        });
    });

    /**
     * Todo Add description for test testGetDynamic
     */ 
    it('should testGetDynamic response', function(done) {
        
        controller.getDynamic(function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"method":"GET","body":{},"uploadCount":0}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testGetDynamicArray
     */ 
    it('should testGetDynamicArray response', function(done) {
        
        controller.getDynamicArray(function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"method":"GET","body":{},"uploadCount":0}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testGetDatetime
     */ 
    it('should testGetDatetime response', function(done) {
        
        controller.getDatetime(function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
 
            //not an array, do simple check
            assert.equal(moment("2016-03-13T12:52:32.123Z").parseZone().format(), response);
            done();
        });
    });

    /**
     * Todo Add description for test testGetDatetimeArray
     */ 
    it('should testGetDatetimeArray response', function(done) {
        
        controller.getDatetimeArray(function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            //this means it is a primitive array
            var expected = ["2016-03-13T12:52:32.123Z","2016-03-13T12:52:32.123Z","2016-03-13T12:52:32.123Z"];

            expected = expected.map(function (e) {
                return moment(e).parseZone().format();
            });
            response = response.map(function (r) {
                return moment(r).parseZone().format();
            });
            assert.equal(TestHelper.isListProperSubsetOf(response, expected, true, false), true);
            done();
        });
    });

    /**
     * Todo Add description for test testGetBoolean
     */ 
    it('should testGetBoolean response', function(done) {
        
        controller.getBoolean(function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
 
            //not an array, do simple check
            assert.equal(true, response);
            done();
        });
    });

    /**
     * Todo Add description for test testGetBooleanArray
     */ 
    it('should testGetBooleanArray response', function(done) {
        
        controller.getBooleanArray(function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            //this means it is a primitive array
            var expected = [true, false, true, true, false];

            assert.equal(TestHelper.isListProperSubsetOf(response, expected, true, false), true);
            done();
        });
    });

    /**
     * Todo Add description for test testGetHeadersAllowExtra
     */ 
    it('should testGetHeadersAllowExtra response', function(done) {
        
        controller.getHeaders(function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            // Test headers
            var headers = [];
            headers["NauManAli"] = null ;
            headers["WaseemHasAn"] = null ;
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            done();
        });
    });

    /**
     * Todo Add description for test testGetLong
     */ 
    it('should testGetLong response', function(done) {
        
        controller.getLong(function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
 
            //not an array, do simple check
            assert.equal(5147483647, response);
            done();
        });
    });

    /**
     * Todo Add description for test testGetStringEnumArray
     */ 
    it('should testGetStringEnumArray response', function(done) {
        
        controller.getStringEnumArray(function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            //this means it is a primitive array
            var expected = ["Tuesday", "Saturday", "Wednesday", "Monday", "Sunday"];

            assert.equal(TestHelper.isListProperSubsetOf(response, expected, true, false), true);
            done();
        });
    });

    /**
     * Todo Add description for test testGetStringEnum
     */ 
    it('should testGetStringEnum response', function(done) {
        
        controller.getStringEnum(function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
 
            //not an array, do simple check
            assert.equal("Monday", response);
            done();
        });
    });

    /**
     * Todo Add description for test testGetIntEnum
     */ 
    it('should testGetIntEnum response', function(done) {
        
        controller.getIntEnum(function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
 
            //not an array, do simple check
            assert.equal(parseInt("3"), response);
            done();
        });
    });

    /**
     * Todo Add description for test testGetIntEnumArray
     */ 
    it('should testGetIntEnumArray response', function(done) {
        
        controller.getIntEnumArray(function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            //this means it is a primitive array
            var expected = [1, 3, 4, 2, 3];

            assert.equal(TestHelper.isListProperSubsetOf(response, expected, true, false), true);
            done();
        });
    });

    /**
     * Todo Add description for test testGetPrecision
     */ 
    it('should testGetPrecision response', function(done) {
        
        controller.getPrecision(function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
 
            //not an array, do simple check
            assert.equal(4.999, response);
            done();
        });
    });

    /**
     * Todo Add description for test testGetBinary
     */ 
    it('should testGetBinary response', function(done) {
        
        TestHelper.getFileContents("https://dl.dropboxusercontent.com/u/31838656/binary.png", function(data) {
            controller.getBinary(function(error, response, context) {
                // Test response code
                assert.equal(200, context.response.statusCode);
                assert.isNotNull(response);
                assert.equal(data.toString(), response.toString());
                done();
            });
        });
    });

});
