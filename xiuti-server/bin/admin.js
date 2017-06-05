const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const models = require('../middleware/database');
const app = express();

app.use('/system',express.static(path.join(__dirname, '../system')));
app.use(express.query());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

require('../middleware/n-router')(app, {
    prefix: '/admin', // 前面要加/ 后面加/
    filterDir: ['admin']
});




module.exports = app;