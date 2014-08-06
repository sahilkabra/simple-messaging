var expect = require('chai').expect;

describe('The application event emitter', function() {
        it ('should return the same instance with multiple require calls for same path', function() {
                var instance1 = require('app/messenger');
                var instance2 = require('app/messenger');
                expect(instance1).to.equal(instance2);
        });
        it('events emitted should be global when module loaded using same path', function(done) {
                var instance1 = require('app/messenger');
                var instance2 = require('app/messenger');
                var eventFired = false;
                instance1.once('testEvent', function() {
                        eventFired = true;
                        expect(eventFired).to.equal(true);
                        done();
                });
                instance2.emit('testEvent');
        });
        it('events emitted are global even when module loaded using differing paths', function(done) {
                var instance1 = require('app/messenger');
                var instance2 = require('../src/messenger');
                var eventFired = false;
                instance1.once('testEvent', function() {
                        eventFired = true;
                        expect(eventFired).to.be.true;
                        done();
                });
                instance2.emit('testEvent');
        });
});
