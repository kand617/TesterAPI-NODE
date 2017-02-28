
/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */
var Person = require("./Person");
var Person = require('./Person');
var Days = require('./Days');

/**
 * Creates an instance of Employee
 *
 * @constructor
 */
var Employee = function (obj) {
    if(!obj) {
        Person.call(this, null);
        this.boss = null;     
        this.department = null;     
        this.dependents = null;     
        this.joiningDay  = "Monday";     
        this.salary = null;     
        this.workingDays = null;     
    } else {
        Person.call(this, obj);
        
        this.boss = (obj.boss !== undefined && obj.boss !== null)? new Person(obj.boss) : null;
        this.department = (obj.department !== undefined && obj.department !== null)? obj.department : null;
        this.dependents = (obj.dependents !== undefined && obj.dependents !== null)? obj.dependents.map(function(model){
            return new Person(model);
        }) : null;
        this.joiningDay = (obj.joiningDay !== undefined && obj.joiningDay !== null)? obj.joiningDay : null;
        this.salary = (obj.salary !== undefined && obj.salary !== null)? obj.salary : null;
        this.workingDays = (obj.workingDays !== undefined && obj.workingDays !== null)? obj.workingDays : null;
    }
};

Employee.prototype = new Person();
Employee.prototype.constructor = Employee;

/**
 * TODO: Write general description for this method
 *
 * @return {Person}
 */
Employee.prototype.getBoss = function() {
    return this.boss;
};

/**
 * Setter for Boss
 * 
 * @param {Person} value 
 */
Employee.prototype.setBoss = function(value) {
    this.boss = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Employee.prototype.getDepartment = function() {
    return this.department;
};

/**
 * Setter for Department
 * 
 * @param {string} value 
 */
Employee.prototype.setDepartment = function(value) {
    this.department = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
Employee.prototype.getDependents = function() {
    return this.dependents;
};

/**
 * Setter for Dependents
 * 
 * @param {array} value 
 */
Employee.prototype.setDependents = function(value) {
    this.dependents = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {Days}
 */
Employee.prototype.getJoiningDay = function() {
    return this.joiningDay;
};

/**
 * Setter for JoiningDay
 * 
 * @param {Days} value 
 */
Employee.prototype.setJoiningDay = function(value) {
    this.joiningDay = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
Employee.prototype.getSalary = function() {
    return this.salary;
};

/**
 * Setter for Salary
 * 
 * @param {int} value 
 */
Employee.prototype.setSalary = function(value) {
    this.salary = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
Employee.prototype.getWorkingDays = function() {
    return this.workingDays;
};

/**
 * Setter for WorkingDays
 * 
 * @param {array} value 
 */
Employee.prototype.setWorkingDays = function(value) {
    this.workingDays = value;
};


module.exports = Employee;
