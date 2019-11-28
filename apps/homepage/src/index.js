const express = require('express');
const getHeaderWidget = require('./services/header-widget-service');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('src/public'));

app.get('/', async (req, res) => {

  let headerWidget = await getHeaderWidget();

  res.render('index', {
    headerCss: headerWidget.css, 
    headerHtml: headerWidget.html
  });
});

const PORT = 3001;

const server = app.listen(PORT, () => {
  console.log(`DeliverMe homepage running → PORT ${server.address().port}`);
});