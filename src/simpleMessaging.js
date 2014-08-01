//simpleMessaging.js

/*
 * This module will create a global messaging bus for the app.
 * All modules that need to listen to OR publish events will
 * require this module and register to it or publish to it
 */
var EventEmitter = require('events').EventEmitter;

var appEvent = new EventEmitter();

module.exports = appEvent;
