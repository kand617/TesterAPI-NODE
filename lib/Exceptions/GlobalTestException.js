/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io ) on 02/28/2017
 */

var APIException = require('./APIException');


/**
 * Creates an instance of GlobalTestException
 *
 * @constructor
 * @param	{string}		reason			The message for error cause
 * @param	{HttpContext}	context			HttpContext containing request and response objects
 */
var GlobalTestException = function(reason, context) {
    if (!context) {
        APIException.call(this, reason || null, null);

        /**
         * Represents the server's exception message
         */
        this.serverMessage = null;

        /**
         * Represents the server's error code
         */
        this.serverCode = null;

    } else {
        APIException.call(this, reason, context);

        if (context.response.body === undefined || context.response.body === null || context.response.body === "") return;

        var response;
        try {
            response = JSON.parse(context.response.body);
        } catch (e) {
            response = JSON.parse(JSON.stringify(context.response.body));
        }

        /**
         * Represents the server's exception message
         */
        this.serverMessage = (response.ServerMessage !== null && response.ServerMessage !== undefined)? response.ServerMessage : null;

        /**
         * Represents the server's error code
         */
        this.serverCode = (response.ServerCode !== null && response.ServerCode !== undefined)? response.ServerCode : null;

    }
};

GlobalTestException.prototype = new APIException();
GlobalTestException.prototype.constructor = GlobalTestException;

/**
 * Represents the server's exception message
 *
 * @return {string}
 */
GlobalTestException.prototype.getServerMessage = function() {
    return this.serverMessage;
};

/**
 * Setter for ServerMessage
 * 
 * @param {string} value 
 */
GlobalTestException.prototype.setServerMessage = function(value) {
    this.serverMessage = value;
};

/**
 * Represents the server's error code
 *
 * @return {int}
 */
GlobalTestException.prototype.getServerCode = function() {
    return this.serverCode;
};

/**
 * Setter for ServerCode
 * 
 * @param {int} value 
 */
GlobalTestException.prototype.setServerCode = function(value) {
    this.serverCode = value;
};


module.exports = GlobalTestException;
