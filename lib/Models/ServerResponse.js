
/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */
var BaseModel = require("./BaseModel");

/**
 * Creates an instance of ServerResponse
 *
 * @constructor
 */
var ServerResponse = function (obj) {
    if(!obj) {
        this.passed = null;     
        this.message = null;     
        this.input = null;     
        //Append to variable dictionary
        this._variableDict['message'] = 'Message';
    } else {
        this.passed = (obj.passed !== undefined && obj.passed !== null)? obj.passed : null;
        this.message = (obj.Message !== undefined && obj.Message !== null)? obj.Message : null;
        this.input = (obj.input !== undefined && obj.input !== null)? obj.input : null;
        //Append to variable dictionary
        this._variableDict['message'] = 'Message';
    }
};

ServerResponse.prototype = new BaseModel();
ServerResponse.prototype.constructor = ServerResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {bool}
 */
ServerResponse.prototype.getPassed = function() {
    return this.passed;
};

/**
 * Setter for Passed
 * 
 * @param {bool} value 
 */
ServerResponse.prototype.setPassed = function(value) {
    this.passed = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
ServerResponse.prototype.getMessage = function() {
    return this.message;
};

/**
 * Setter for Message
 * 
 * @param {string|null} value 
 */
ServerResponse.prototype.setMessage = function(value) {
    this.message = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {dictionary|null}
 */
ServerResponse.prototype.getInput = function() {
    return this.input;
};

/**
 * Setter for Input
 * 
 * @param {dictionary|null} value 
 */
ServerResponse.prototype.setInput = function(value) {
    this.input = value;
};


module.exports = ServerResponse;
