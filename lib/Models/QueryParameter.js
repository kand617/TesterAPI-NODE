
/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */
var BaseModel = require("./BaseModel");

/**
 * Creates an instance of QueryParameter
 *
 * @constructor
 */
var QueryParameter = function (obj) {
    if(!obj) {
        this.key = null;     
    } else {
        this.key = (obj.key !== undefined && obj.key !== null)? obj.key : null;
    }
};

QueryParameter.prototype = new BaseModel();
QueryParameter.prototype.constructor = QueryParameter;

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
QueryParameter.prototype.getKey = function() {
    return this.key;
};

/**
 * Setter for Key
 * 
 * @param {string|null} value 
 */
QueryParameter.prototype.setKey = function(value) {
    this.key = value;
};


module.exports = QueryParameter;
