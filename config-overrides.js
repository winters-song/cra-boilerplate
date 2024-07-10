const {override} = require('customize-cra')
const path = require('path');
const addLessLoader = require("customize-cra-less-loader");

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      relativeUrls: false,
    }
  }),
  
  (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.alias,
        '@': path.resolve(__dirname, 'src'),
      },
    }
    return config
  },
  
)