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


var FormParamsController = {

    /**
     * TODO: type endpoint description here
     * @param {long} value    Required parameter: Example: 
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}
     */
    sendLong: function (value, callback) {

        //Validating required parameters
        if (value === null || value === undefined){
            return callback({errorMessage: "The parameter 'value' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/form/number";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
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
                errorResponse = _BaseController.validateResponse(_context, "sendLong");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "sendLong");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {string} value    Required parameter: Example: 
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}
     */
    sendString: function (value, callback) {

        //Validating required parameters
        if (value === null || value === undefined){
            return callback({errorMessage: "The parameter 'value' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/form/string";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
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
                errorResponse = _BaseController.validateResponse(_context, "sendString");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "sendString");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {array} integers    Required parameter: Example: 
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}
     */
    sendIntegerArray: function (integers, callback) {

        //Validating required parameters
        if (integers === null || integers === undefined){
            return callback({errorMessage: "The parameter 'integers' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/form/number";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "array": true
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "Stamplay SDK"
        };

        //prepare form data
        var _form = {
            "integers": integers
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
                errorResponse = _BaseController.validateResponse(_context, "sendIntegerArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "sendIntegerArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {array} strings    Required parameter: Example: 
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}
     */
    sendStringArray: function (strings, callback) {

        //Validating required parameters
        if (strings === null || strings === undefined){
            return callback({errorMessage: "The parameter 'strings' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/form/string";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "array": true
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "Stamplay SDK"
        };

        //prepare form data
        var _form = {
            "strings": strings
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
                errorResponse = _BaseController.validateResponse(_context, "sendStringArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "sendStringArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {array} suites    Required parameter: Example: 
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}
     */
    sendIntegerEnumArray: function (suites, callback) {

        //Validating required parameters
        if (suites === null || suites === undefined){
            return callback({errorMessage: "The parameter 'suites' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/form/integerenum";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "array": true
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "Stamplay SDK"
        };

        //prepare form data
        var _form = {
            "suites": suites
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
                errorResponse = _BaseController.validateResponse(_context, "sendIntegerEnumArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "sendIntegerEnumArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {array} days    Required parameter: Example: 
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}
     */
    sendStringEnumArray: function (days, callback) {

        //Validating required parameters
        if (days === null || days === undefined){
            return callback({errorMessage: "The parameter 'days' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/form/stringenum";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "array": true
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "Stamplay SDK"
        };

        //prepare form data
        var _form = {
            "days": days
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
                errorResponse = _BaseController.validateResponse(_context, "sendStringEnumArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "sendStringEnumArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {Employee} model    Required parameter: Example: 
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}
     */
    sendModel: function (model, callback) {

        //Validating required parameters
        if (model === null || model === undefined){
            return callback({errorMessage: "The parameter 'model' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/form/model";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "Stamplay SDK"
        };

        //prepare form data
        var _form = {
            "model": model
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
                errorResponse = _BaseController.validateResponse(_context, "sendModel");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "sendModel");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {array} models    Required parameter: Example: 
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}
     */
    sendModelArray: function (models, callback) {

        //Validating required parameters
        if (models === null || models === undefined){
            return callback({errorMessage: "The parameter 'models' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/form/model";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "array": true
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "Stamplay SDK"
        };

        //prepare form data
        var _form = {
            "models": models
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
                errorResponse = _BaseController.validateResponse(_context, "sendModelArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "sendModelArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {string} file    Required parameter: Example: 
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}
     */
    sendFile: function (file, callback) {

        //Validating required parameters
        if (file === null || file === undefined){
            return callback({errorMessage: "The parameter 'file' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/form/file";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "Stamplay SDK"
        };

        //prepare form data
        var fs = require('fs');
        var _formData = {
            file: fs.createReadStream(file)
        };

        //Remove null values
        _APIHelper.cleanObject(_formData);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            formData : _formData,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "sendFile");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "sendFile");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Send a variety for form params. Returns file count and body params
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} file    Required parameter: Example: 
     *     {array} integers    Required parameter: Example: 
     *     {array} models    Required parameter: Example: 
     *     {array} strings    Required parameter: Example: 
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}
     */
    sendMixedArray: function (input, callback) {
        //Assign default values
        input = input || {};

        //Validating required parameters
        if (input.file === null || input.file === undefined){
            return callback({errorMessage: "The property 'file' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.integers === null || input.integers === undefined){
            return callback({errorMessage: "The property 'integers' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.models === null || input.models === undefined){
            return callback({errorMessage: "The property 'models' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.strings === null || input.strings === undefined){
            return callback({errorMessage: "The property 'strings' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/form/mixed";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "Stamplay SDK"
        };

        //prepare form data
        var fs = require('fs');
        var _formData = {
            file: fs.createReadStream(input.file),
            integers: input.integers,
            models: input.models,
            strings: input.strings
        };

        //Remove null values
        _APIHelper.cleanObject(_formData);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            formData : _formData,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "sendMixedArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "sendMixedArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    }

};

module.exports = FormParamsController;
