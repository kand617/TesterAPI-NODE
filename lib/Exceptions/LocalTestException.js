/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io ) on 02/28/2017
 */

var GlobalTestException = require('./GlobalTestException');


/**
 * Creates an instance of LocalTestException
 *
 * @constructor
 * @param	{string}		reason			The message for error cause
 * @param	{HttpContext}	context			HttpContext containing request and response objects
 */
var LocalTestException = function(reason, context) {
    if (!context) {
        GlobalTestException.call(this, reason || null, null);

        /**
         * Represents the specific endpoint info
         */
        this.secretMessageForEndpoint = null;

    } else {
        GlobalTestException.call(this, reason, context);

        if (context.response.body === undefined || context.response.body === null || context.response.body === "") return;

        var response;
        try {
            response = JSON.parse(context.response.body);
        } catch (e) {
            response = JSON.parse(JSON.stringify(context.response.body));
        }

        /**
         * Represents the specific endpoint info
         */
        this.secretMessageForEndpoint = (response.SecretMessageForEndpoint !== null && response.SecretMessageForEndpoint !== undefined)? response.SecretMessageForEndpoint : null;

    }
};

LocalTestException.prototype = new GlobalTestException();
LocalTestException.prototype.constructor = LocalTestException;

/**
 * Represents the specific endpoint info
 *
 * @return {string}
 */
LocalTestException.prototype.getSecretMessageForEndpoint = function() {
    return this.secretMessageForEndpoint;
};

/**
 * Setter for SecretMessageForEndpoint
 * 
 * @param {string} value 
 */
LocalTestException.prototype.setSecretMessageForEndpoint = function(value) {
    this.secretMessageForEndpoint = value;
};


module.exports = LocalTestException;
