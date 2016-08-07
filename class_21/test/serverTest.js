const assert = require('assert');

var server = require('../server');

console.log(server);

describe('server tests', function () {
    describe('calculateFare()', function () {
        it('return fare from distance and time', function (done) {
            assert.equal(server.calculateFare(3, 16), 34, 'What?');
            done();
        });
    });
});