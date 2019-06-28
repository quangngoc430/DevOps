const express = require('express');
const path = require('path');
const winston = require('winston');
var engines = require('consolidate');


const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(process.env.PORT, () => {
  winston.info(`NODE_ENV: ${process.env.NODE_ENV}`);
  winston.info(`INSTANCE: ${process.env.INSTANCE}`);
  winston.info(`EXPRESS: ${process.env.PORT}`);
});
