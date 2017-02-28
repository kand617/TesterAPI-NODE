/**
  * @module TesterLib
  *  
  * Testing various  api  features
  */

var Configuration = require('./configuration');
var Servers = require('./Servers');
var Environments = require('./Environments');
var BaseController = require('./Controllers/BaseController');
var ErrorCodesController = require('./Controllers/ErrorCodesController');
var ResponseTypesController = require('./Controllers/ResponseTypesController');
var BodyParamsController = require('./Controllers/BodyParamsController');
var FormParamsController = require('./Controllers/FormParamsController');
var EchoController = require('./Controllers/EchoController');
var QueryParamController = require('./Controllers/QueryParamController');
var TemplateParamsController = require('./Controllers/TemplateParamsController');
var HeaderController = require('./Controllers/HeaderController');
var Employee = require('./Models/Employee');
var EchoResponse = require('./Models/EchoResponse');
var Person = require('./Models/Person');
var QueryParameter = require('./Models/QueryParameter');
var ServerResponse = require('./Models/ServerResponse');
var LocalTestException = require('./Exceptions/LocalTestException');
var GlobalTestException = require('./Exceptions/GlobalTestException');
var APIException = require('./Exceptions/APIException');


function initializer () { }

//Main functional components of TesterLib
initializer.Configuration = Configuration;
initializer.Servers = Servers;
initializer.Environments = Environments;
initializer.BaseController = BaseController;
initializer.ErrorCodesController = ErrorCodesController;
initializer.ResponseTypesController = ResponseTypesController;
initializer.BodyParamsController = BodyParamsController;
initializer.FormParamsController = FormParamsController;
initializer.EchoController = EchoController;
initializer.QueryParamController = QueryParamController;
initializer.TemplateParamsController = TemplateParamsController;
initializer.HeaderController = HeaderController;

//Main Models of TesterLib
initializer.Employee = Employee;
initializer.EchoResponse = EchoResponse;
initializer.Person = Person;
initializer.QueryParameter = QueryParameter;
initializer.ServerResponse = ServerResponse;

//Main Exceptions of TesterLib
initializer.LocalTestException = LocalTestException;
initializer.GlobalTestException = GlobalTestException;
initializer.APIException = APIException;

module.exports = initializer;
