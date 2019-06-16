var main = require('./handlers/main.js')

module.exports = (app) => {
    app.post('/user/signup', main.signup);
    app.post('/user/login', main.login);
}