/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */

var _request = require('../Http/Client/RequestClient');
var _configuration = require('../configuration');
var _servers = require('../Servers');
var _APIHelper = require('../APIHelper');
var _BaseController = require('./BaseController');
var _ServerResponse = require('../Models/ServerResponse');


var HeaderController = {

    /**
     * Sends a single header params
     * @param {string} customHeader    Required parameter: Example: 
     * @param {string} value    Required parameter: Represents the value of the custom header
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}
     */
    sendHeaders: function (customHeader, value, callback) {

        //Validating required parameters
        if (customHeader === null || customHeader === undefined){
            return callback({errorMessage: "The parameter 'customHeader' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        } else if (value === null || value === undefined){
            return callback({errorMessage: "The parameter 'value' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/header";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "custom-header": customHeader,
            "user-agent": "Stamplay SDK"
        };

        //prepare form data
        var _form = {
            "value": value
        };

        //Remove null values
        _APIHelper.cleanObject(_form);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            form : _form,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "sendHeaders");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "sendHeaders");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    }

};

module.exports = HeaderController;
