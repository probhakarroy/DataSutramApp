var express = require('express');
var morgan = require('morgan'); //logger
var domain = require('express-domain-middleware'); //express domain middleware
var mongoose = require('mongoose'); //ODM
var routes = require('./routes.js'); //routes
var cors = require('cors');

//local libraries
var credentials = require('./lib/credentials.js');


var app = express();


//logger
switch (app.get('env')) {
    case 'development':
        app.use(morgan('dev'));
        break;

    case 'production':
        app.use(morgan('combined'));
        break;
}

//ODM connection
var opts = {
    keepAlive: 1,
    useNewUrlParser: true,
};

switch (app.get('env')) {
    case 'development':
        mongoose.connect(credentials.mongo.development.connection_string, opts)
            .then(() => {
                // eslint-disable-next-line no-console
                console.log('Successfully Connected to the ' + app.get('env') + ' Db');
            })
            .catch((err) => {
                // eslint-disable-next-line no-console
                if (err) return console.error('Error connecting to mongodb' + err);
            });
        break;

    case 'production':
        mongoose.connect(credentials.mongo.production.connectionString, opts)
            .then(() => {
                // eslint-disable-next-line no-console
                console.log('Successfully Connected to the ' + app.get('env') + ' Db');
            })
            .catch((err) => {
                // eslint-disable-next-line no-console
                if (err) return console.error('Error connecting to mongodb' + err);
            });
        break;

    default:
        throw new Error('Unknown execution environment : ' + app.get('env'));
}


// eslint-disable-next-line no-undef
app.set('port', process.env.PORT || 3000);

//disable server info
app.disable('x-powered-by');

//using parser in app.js
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(domain); //Unchaught Exception handling using Domains
app.use('/user', cors()); //allowing same origin resource sharing

//routes binding
routes(app);

//Custom 404 Page
app.use((req, res) => {
    res.status(404);
    res.json({error: '404 - Not Found'});
});

//Custom 500 page
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.stack);
    res.status(500);
    res.json({error : '500 - Internal Error'});
});

app.listen(app.get('port'), () => {
    // eslint-disable-next-line no-console
    console.log('Express started in ' + app.get('env') + ' mode on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.');
});

module.exports = app;