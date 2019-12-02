const fetch = require('node-fetch');
const config = require('../config');

module.exports = async () => {
  const url = config.headerWidgetUrl;

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.error(err);
    return {
      css: `${url}/css/header-widget.css`,
      js: '',
      html: `
        <div class="header-container">
        </div>
      `
    }
  }

}