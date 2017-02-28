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


var QueryParamController = {

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}
     */
    noParams: function (callback) {


        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/query/noparams";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "Stamplay SDK"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "noParams");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "noParams");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {string} string    Required parameter: Example: 
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}
     */
    stringParam: function (string, callback) {

        //Validating required parameters
        if (string === null || string === undefined){
            return callback({errorMessage: "The parameter 'string' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/query/stringparam";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "string": string
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "Stamplay SDK"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "stringParam");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "stringParam");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {string} url    Required parameter: Example: 
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}
     */
    urlParam: function (url, callback) {

        //Validating required parameters
        if (url === null || url === undefined){
            return callback({errorMessage: "The parameter 'url' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/query/urlparam";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "url": url
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "Stamplay SDK"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "urlParam");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "urlParam");
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
    integerEnumArray: function (suites, callback) {

        //Validating required parameters
        if (suites === null || suites === undefined){
            return callback({errorMessage: "The parameter 'suites' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/query/integerenumarray";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "suites": (suites != null) ? suites : null
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "Stamplay SDK"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "integerEnumArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "integerEnumArray");
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
    numberArray: function (integers, callback) {

        //Validating required parameters
        if (integers === null || integers === undefined){
            return callback({errorMessage: "The parameter 'integers' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/query/numberarray";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "integers": integers
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "Stamplay SDK"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "numberArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "numberArray");
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
    stringArray: function (strings, callback) {

        //Validating required parameters
        if (strings === null || strings === undefined){
            return callback({errorMessage: "The parameter 'strings' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/query/stringarray";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "strings": strings
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "Stamplay SDK"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "stringArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "stringArray");
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
    stringEnumArray: function (days, callback) {

        //Validating required parameters
        if (days === null || days === undefined){
            return callback({errorMessage: "The parameter 'days' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/query/stringenumarray";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "days": (days != null) ? days : null
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "Stamplay SDK"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "stringEnumArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "stringEnumArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {bool} mboolean    Required parameter: Example: 
     * @param {int} number    Required parameter: Example: 
     * @param {string} string    Required parameter: Example: 
     * @param {Dictionary} queryParameters    Optional parameter: Additional optional query parameters are supported by this endpoint
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}
     */
    simpleQuery: function (mboolean, number, string, queryParameters, callback) {
        //Assign default values
        queryParameters = queryParameters || null;

        //Validating required parameters
        if (mboolean === null || mboolean === undefined){
            return callback({errorMessage: "The parameter 'mboolean' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        } else if (number === null || number === undefined){
            return callback({errorMessage: "The parameter 'number' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        } else if (string === null || string === undefined){
            return callback({errorMessage: "The parameter 'string' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/query";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "boolean": mboolean,
            "number": number,
            "string": string
        });

        //append optional parameters to the query
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, queryParameters)
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "Stamplay SDK"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "simpleQuery");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "simpleQuery");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {int} number    Required parameter: Example: 
     * @param {double} precision    Required parameter: Example: 
     * @param {string} string    Required parameter: Example: 
     * @param {string} url    Required parameter: Example: 
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}
     */
    multipleParams: function (number, precision, string, url, callback) {

        //Validating required parameters
        if (number === null || number === undefined){
            return callback({errorMessage: "The parameter 'number' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        } else if (precision === null || precision === undefined){
            return callback({errorMessage: "The parameter 'precision' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        } else if (string === null || string === undefined){
            return callback({errorMessage: "The parameter 'string' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        } else if (url === null || url === undefined){
            return callback({errorMessage: "The parameter 'url' is a required parameter and cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/query/multipleparams";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "number": number,
            "precision": precision,
            "string": string,
            "url": url
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "Stamplay SDK"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "multipleParams");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "multipleParams");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    }

};

module.exports = QueryParamController;
