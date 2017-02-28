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
var _Employee = require('../Models/Employee');
var _Days = require('../Models/Days');
var _SuiteCode = require('../Models/SuiteCode');
var moment = require("moment");

var ResponseTypesController = {

    /**
     * Gets a integer response
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {int}
     */
    getInteger: function (callback) {


        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/response/integer";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
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
                errorResponse = _BaseController.validateResponse(_context, "getInteger");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var _strResult = _response.body;
                var _result = JSON.parse(_strResult);
                callback(null, _result, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "getInteger");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Get an array of integers.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {array}
     */
    getIntegerArray: function (callback) {


        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/response/integer";
        
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
                errorResponse = _BaseController.validateResponse(_context, "getIntegerArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "getIntegerArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getDynamic: function (callback) {


        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/response/dynamic";
        
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
                errorResponse = _BaseController.validateResponse(_context, "getDynamic");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "getDynamic");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getDynamicArray: function (callback) {


        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/response/dynamic";
        
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
                errorResponse = _BaseController.validateResponse(_context, "getDynamicArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "getDynamicArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {dateTime}
     */
    getDatetime: function (callback) {


        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/response/datetime";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
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
                errorResponse = _BaseController.validateResponse(_context, "getDatetime");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var _strResult = _response.body;
                var _result = moment(_strResult).parseZone().format();
                callback(null, _result, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "getDatetime");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {array}
     */
    getDatetimeArray: function (callback) {


        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/response/datetime";
        
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
                errorResponse = _BaseController.validateResponse(_context, "getDatetimeArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = parsed.map(function(dateTimeString){
                    return moment(dateTimeString).parseZone().format()
                });
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "getDatetimeArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {bool}
     */
    getBoolean: function (callback) {


        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/response/boolean";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
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
                errorResponse = _BaseController.validateResponse(_context, "getBoolean");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var _strResult = _response.body;
                var _result = JSON.parse(_strResult);
                callback(null, _result, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "getBoolean");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {array}
     */
    getBooleanArray: function (callback) {


        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/response/boolean";
        
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
                errorResponse = _BaseController.validateResponse(_context, "getBooleanArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "getBooleanArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {void}
     */
    getHeaders: function (callback) {


        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/response/headers";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
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
                errorResponse = _BaseController.validateResponse(_context, "getHeaders");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, null, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "getHeaders");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {long}
     */
    getLong: function (callback) {


        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri(_servers.MDEFAULT);
        
        var _queryBuilder = _baseUri + "/response/long";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
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
                errorResponse = _BaseController.validateResponse(_context, "getLong");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var _strResult = _response.body;
                var _result = Number(_strResult);
                callback(null, _result, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "getLong");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {Employee}
     */
    getModel: function (callback) {


        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/response/model";
        
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
                errorResponse = _BaseController.validateResponse(_context, "getModel");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _Employee(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "getModel");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {array}
     */
    getStringEnumArray: function (callback) {


        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/response/enum";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "array": true,
            "type": "string"
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
                errorResponse = _BaseController.validateResponse(_context, "getStringEnumArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "getStringEnumArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {Days}
     */
    getStringEnum: function (callback) {


        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/response/enum";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "type": "string"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
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
                errorResponse = _BaseController.validateResponse(_context, "getStringEnum");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var _strResult = _response.body;
                var _result = _strResult;
                callback(null, _result, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "getStringEnum");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {array}
     */
    getModelArray: function (callback) {


        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/response/model";
        
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
                errorResponse = _BaseController.validateResponse(_context, "getModelArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = parsed.map(function(model){
                    return new _Employee(model);
                });
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "getModelArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {SuiteCode}
     */
    getIntEnum: function (callback) {


        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/response/enum";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "type": "int"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
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
                errorResponse = _BaseController.validateResponse(_context, "getIntEnum");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var _strResult = _response.body;
                var _result = parseInt(_strResult);
                callback(null, _result, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "getIntEnum");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {array}
     */
    getIntEnumArray: function (callback) {


        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/response/enum";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "array": true,
            "type": "int"
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
                errorResponse = _BaseController.validateResponse(_context, "getIntEnumArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "getIntEnumArray");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {double}
     */
    getPrecision: function (callback) {


        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/response/precision";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
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
                errorResponse = _BaseController.validateResponse(_context, "getPrecision");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var _strResult = _response.body;
                var _result = JSON.parse(_strResult);
                callback(null, _result, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "getPrecision");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * gets a binary object
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {binary}
     */
    getBinary: function (callback) {


        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/response/binary";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
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
                errorResponse = _BaseController.validateResponse(_context, "getBinary");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "getBinary");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    }

};

module.exports = ResponseTypesController;
