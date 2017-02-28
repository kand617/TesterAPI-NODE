/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io ) on 02/28/2017
 */

var LocalTestException = require('../Exceptions/LocalTestException');
var GlobalTestException = require('../Exceptions/GlobalTestException');

var BaseController = {

    /**
     * Global error handling
     * @param	{HttpContext}	context			HttpContext containing request and response objects
     * @return	{function}		callback		Callback function in the form of function(error, response, context)
     */
    validateResponse(context, endpName) {
        var errorObj = {
            errorMessage: "",
            errorCode: "",
            errorResponse: context.response.body
        };
        var returnObj = {
            error: errorObj,
            response: null,
            context: context
        };

        if (context.response.statusCode === 400) {
            returnObj.error.errorMessage = "400 Global";
            returnObj.error.errorCode = 400;
        } else if (context.response.statusCode === 402) {
            returnObj.error.errorMessage = "402 Global";
            returnObj.error.errorCode = 402;
        } else if (context.response.statusCode === 403) {
            returnObj.error.errorMessage = "403 Global";
            returnObj.error.errorCode = 403;
        } else if (context.response.statusCode === 404) {
            returnObj.error.errorMessage = "404 Global";
            returnObj.error.errorCode = 404;
        } else if (context.response.statusCode === 500) {
            returnObj.error.errorMessage = "500 Global";
            returnObj.error.errorCode = 500;
            returnObj.error.errorResponse = new GlobalTestException("500 Global", context);
        } else if (context.response.statusCode === 0) {
            returnObj.error.errorMessage = "Invalid response.";
            returnObj.error.errorCode = 0;
            returnObj.error.errorResponse = new GlobalTestException("Invalid response.", context);
        } else {
            returnObj.error.errorMessage = "HTTP Response Not OK";
            returnObj.error.errorCode = context.response.statusCode;
         }

        return returnObj;
    },
};

module.exports = BaseController;
