const path = require('path');
module.exports = {
  devServer: {
    port: 3000,
    disableHostCheck: true
  },
  configureWebpack: {
    // resolve: {
    //   alias: {
    //     leaflet: path.join(__dirname, 'node_modules/leaflet'),
    //   },
    // },
  },
  // "transpileDependencies": [
  //   "vuetify"
  // ]
};