/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */
var servers = require('./Servers');
var environments = require('./Environments');
var apiHelper = require('./APIHelper');

var environmentsMap = [];
var e = environments;
var s = servers;

environmentsMap[e.PRODUCTION] = [];
environmentsMap[e.TESTING] = [];

environmentsMap[e.PRODUCTION][s.MDEFAULT] = "http://apimatic.hopto.org:{suites}";
environmentsMap[e.PRODUCTION][s.AUTH_SERVER] = "http://apimaticauth.hopto.org:3000";
environmentsMap[e.TESTING][s.MDEFAULT] = "http://apimatic.hopto.org:3000";
environmentsMap[e.TESTING][s.AUTH_SERVER] = "http://apimaticauth.xhopto.org:3000";

var Configuration = {
    /**
     * port
     * @type {string}
     */
    port: "80",

    /**
     * suites
     * @type {SuiteCode}
     */
    suites: 1,

    /**
     * Current API environment
     * @type {string}
     */
    currentEnvironment: environments.PRODUCTION,

    /**
     * Get base URI for a server in the current API environment
     * @param  {string|null} server Server name
     * @return {string}             Base URI for server
     */
    getBaseUri(server) {
        var url = environmentsMap[this.currentEnvironment][server || servers.MDEFAULT];
        var urlParams = {
            port: this.port,
            suites: this.suites
        };
        return apiHelper.appendUrlWithTemplateParameters(url, urlParams);
    },
};

module.exports = Configuration;
