const express = require('express');
const fs = require('fs');

const app = new express();

app.use(express.static('src/public'));

app.get('/', (req, res) => {
  // const host = 'http://localhost:3000';
  const html = fs.readFileSync(`${__dirname}/header.html`, 'utf-8');
  return res.json({
    'css': `/css/header-widget.css`,
    'js': '',
    'html': html
  });
});

const PORT = 3100;

const server = app.listen(PORT, () => {
  console.log(`DeliverMe header running → PORT ${server.address().port}`);
});
