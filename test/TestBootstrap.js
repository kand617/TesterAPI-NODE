/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */
var configuration = require('../lib/configuration');
var environments = require('../lib/Environments');

var testConfiguration = {
    ASSERT_PRECISION: 0.1,
    TEST_TIMEOUT: 100000
};

configuration.currentEnvironment = environments.TESTING;

configuration.BASEURI = "http://apimatic.hopto.org:3000";
configuration.port = "3000";
configuration.suites = 4;

module.exports = testConfiguration;
