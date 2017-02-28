
/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */
var BaseModel = require("./BaseModel");

/**
 * Creates an instance of Person
 *
 * @constructor
 */
var Person = function (obj) {
    if(!obj) {
        this.address = null;     
        this.age = null;     
        this.name = null;     
        this.uid = null;     
    } else {
        this.address = (obj.address !== undefined && obj.address !== null)? obj.address : null;
        this.age = (obj.age !== undefined && obj.age !== null)? obj.age : null;
        this.name = (obj.name !== undefined && obj.name !== null)? obj.name : null;
        this.uid = (obj.uid !== undefined && obj.uid !== null)? obj.uid : null;
    }
};

Person.prototype = new BaseModel();
Person.prototype.constructor = Person;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Person.prototype.getAddress = function() {
    return this.address;
};

/**
 * Setter for Address
 * 
 * @param {string} value 
 */
Person.prototype.setAddress = function(value) {
    this.address = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {long}
 */
Person.prototype.getAge = function() {
    return this.age;
};

/**
 * Setter for Age
 * 
 * @param {long} value 
 */
Person.prototype.setAge = function(value) {
    this.age = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Person.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string} value 
 */
Person.prototype.setName = function(value) {
    this.name = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Person.prototype.getUid = function() {
    return this.uid;
};

/**
 * Setter for Uid
 * 
 * @param {string} value 
 */
Person.prototype.setUid = function(value) {
    this.uid = value;
};


module.exports = Person;
