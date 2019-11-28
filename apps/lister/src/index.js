const path = require('path');
const express = require('express');
const getHeaderWidget = require('./services/header-widget-service');
const search = require('./services/business-search-service');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('src/public'));

app.get('/results', async (req, res) => {
  let headerWidget = await getHeaderWidget();

  const results = await search(req.query.postcode);

  res.render('index', {
    headerCss: headerWidget.css, 
    headerHtml: headerWidget.html,
    postcode: req.query.postcode,
    results
  });
});

const PORT = 3002;
const server = app.listen(PORT, () => {
  console.log(`DeliverMe lister running → PORT ${server.address().port}`);
});