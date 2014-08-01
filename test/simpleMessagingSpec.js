describe('The application event emitter', function() {
        it ('should return the same instance with multiple require calls for same path', function() {
                var instance1 = require('app/simpleMessaging');
                var instance2 = require('app/simpleMessaging');
                expect(instance1).toEqual(instance2);
        });
        it('events emitted should be global when module loaded using same path', function(done) {
                var instance1 = require('app/simpleMessaging');
                var instance2 = require('app/simpleMessaging');
                var eventFired = false;
                instance1.on('testEvent', function() {
                        eventFired = true;
                        done();
                });
                instance2.emit('testEvent');
                expect(eventFired).toEqual(true);
        });
        it('events emitted are global even when module loaded using differing paths', function(done) {
                var instance1 = require('app/simpleMessaging');
                var instance2 = require('../src/simpleMessaging');
                var eventFired = false;
                instance1.on('testEvent', function() {
                        eventFired = true;
                        done();
                });
                instance2.emit('testEvent');
                expect(eventFired).toEqual(true);
        });
});
