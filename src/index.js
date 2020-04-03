const express = require('express');
const routes = require('./routes');

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(port);