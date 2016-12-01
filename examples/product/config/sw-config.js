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
    staticFileGlobs: ['dist/js/*.{js,css,png}']
  },
  manifest: {
    background: "#007dc6",
    logo: "./images/walmart-icon.png",
    title: "Electrode Progressive Product",
    short_name: "Electrode Product",
    theme_color: "#007dc6",
    gcm_sender_id: "123456789"
  }
};
