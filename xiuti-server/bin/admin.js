const express = require('express');
// const models = require('../middleware/database');
const app = express();

require('../middleware/n-router')(app, {
    prefix: '/admin', // 前面要加/ 后面加/
    filterDir: ['admin']
});

module.exports = app;