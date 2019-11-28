const fetch = require('node-fetch');
const config = require('../config');

const search = async (query) => {
  let url = config.businessSearchServiceUrl;
  let queryParam = encodeURIComponent(query);

  try {
    const res = await fetch(`${url}/api/search?q=$queryParam}`);
    const result = await res.json();
    return result;
  } catch (ex) {
    console.error('Failed to get results from service');
    return {
      page: 1,
      pages: 1,
      itemsPerPage: 25,
      totaNumberOfItems: 0,
      items: []
    }
  }
}

module.exports = search;