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
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    logo: "./images/walmart-icon.png",
    title: "Electrode Progressive Product",
    short_name: "Electrode Product",
    theme_color: "#FFFFFF"
  }
};