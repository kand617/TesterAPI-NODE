
/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */
var BaseModel = require("./BaseModel");
var QueryParameter = require('./QueryParameter');

/**
 * Creates an instance of EchoResponse
 *
 * @constructor
 */
var EchoResponse = function (obj) {
    if(!obj) {
        this.body = null;     
        this.headers = null;     
        this.method = null;     
        this.path = null;     
        this.query = null;     
        this.uploadCount = null;     
    } else {
        this.body = (obj.body !== undefined && obj.body !== null)? obj.body : null;
        this.headers = (obj.headers !== undefined && obj.headers !== null)? obj.headers : null;
        this.method = (obj.method !== undefined && obj.method !== null)? obj.method : null;
        this.path = (obj.path !== undefined && obj.path !== null)? obj.path : null;
        this.query = (obj.query !== undefined && obj.query !== null)? new QueryParameter(obj.query) : null;
        this.uploadCount = (obj.uploadCount !== undefined && obj.uploadCount !== null)? obj.uploadCount : null;
    }
};

EchoResponse.prototype = new BaseModel();
EchoResponse.prototype.constructor = EchoResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {dictionary|null}
 */
EchoResponse.prototype.getBody = function() {
    return this.body;
};

/**
 * Setter for Body
 * 
 * @param {dictionary|null} value 
 */
EchoResponse.prototype.setBody = function(value) {
    this.body = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {dictionary|null}
 */
EchoResponse.prototype.getHeaders = function() {
    return this.headers;
};

/**
 * Setter for Headers
 * 
 * @param {dictionary|null} value 
 */
EchoResponse.prototype.setHeaders = function(value) {
    this.headers = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
EchoResponse.prototype.getMethod = function() {
    return this.method;
};

/**
 * Setter for Method
 * 
 * @param {string|null} value 
 */
EchoResponse.prototype.setMethod = function(value) {
    this.method = value;
};

/**
 * relativePath
 *
 * @return {string|null}
 */
EchoResponse.prototype.getPath = function() {
    return this.path;
};

/**
 * Setter for Path
 * 
 * @param {string|null} value 
 */
EchoResponse.prototype.setPath = function(value) {
    this.path = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {dictionary|null}
 */
EchoResponse.prototype.getQuery = function() {
    return this.query;
};

/**
 * Setter for Query
 * 
 * @param {dictionary|null} value 
 */
EchoResponse.prototype.setQuery = function(value) {
    this.query = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {int|null}
 */
EchoResponse.prototype.getUploadCount = function() {
    return this.uploadCount;
};

/**
 * Setter for UploadCount
 * 
 * @param {int|null} value 
 */
EchoResponse.prototype.setUploadCount = function(value) {
    this.uploadCount = value;
};


module.exports = EchoResponse;
