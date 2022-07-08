const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const path = require('path');
const util = require('util');