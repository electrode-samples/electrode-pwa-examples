module.exports = {
  cache: {
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }, {
      handler: "fastest",
      urlPattern: "^https:\/\/fonts\.googleapis\.com"
    }, {
      handler: "fastest",
      urlPattern: "^https:\/\/fonts\.gstatic\.com"
    }],
    staticFileGlobs: ['dist/js/*.{js,css,png,svg,jpg}']
  },
  manifest: {
    background: "#007dc6",
    logo: "./images/walmart-icon.png",
    title: "Electrode Progressive Product",
    short_name: "Electrode Product",
    theme_color: "#007dc6"
  }
};
