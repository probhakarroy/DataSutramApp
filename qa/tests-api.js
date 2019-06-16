/* eslint-disable no-undef */
var assert = require('chai').assert;
var rest = require('restler');

suite('API tests', () => {
    var base = 'http://localhost:3000/user';

    test('should be able to add an user', (done) => {
        var new_user = {
            name: 'Probhakar Roy',
            username: Math.random().toString(36).substring(7),
            password: 'abcde1234',
            dateofbirth: '1997/10/31'
        };
        rest.post(base+'/signup', {data : new_user}).on('success', (data) => {
            assert.match(data.id, /\w/, 'id must be set');
            done();
        });
    });

    test('should be able to retrive an token', (done) => {
        var new_user = {
            name: 'Probhakar Roy',
            username: Math.random().toString(36).substring(7),
            password: 'abcde1234',
            dateofbirth: '1997/10/31'
        };
        // eslint-disable-next-line no-unused-vars
        rest.post(base+'/signup', {data : new_user}).on('success', (data) => {
            rest.post(base+'/login', {data : {
                username : new_user.username,
                password : new_user.password,
            }}).on('success', (data) => {
                assert.match(data.token, /\w/, 'token must be set');
                done();
            });
        });
    });
});