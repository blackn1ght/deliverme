const baseConfig = require('./appsettings.json');

function getConfig() {
  const env = (process.env.NODE_ENV || 'production').toLowerCase().trim();
  const envConfig = require(`./appsettings.${env}.json`);
  if (!envConfig) return baseConfig;

  return { ...baseConfig, ...envConfig };
}

module.exports = getConfig();