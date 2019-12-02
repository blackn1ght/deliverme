const express = require('express');
const path = require('path');
const fs = require('fs');
const getHeaderWidget = require('./services/header-widget-service');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use('/signup-public', express.static('src/public'));
app.use('/signup-static', express.static('src/client-app/build/static'));

app.get('/', async (req, res) => {
  const headerWidget = await getHeaderWidget();
  const clientAppHtml = fs.readFileSync(`${__dirname}/client-app/build/index.html`, 'utf-8')
    .replace(/\/static\//g, '/signup-static/')
  
  res.render('index', {
    headerCss: headerWidget.css, 
    headerHtml: headerWidget.html,
    clientAppHtml: clientAppHtml
  });
});

const PORT = 3003;
const server = app.listen(PORT, () => {
  console.log(`DeliverMe signup running → PORT ${server.address().port}`);
})