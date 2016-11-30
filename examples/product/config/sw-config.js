module.exports = {
  cache: {
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: /\/$/
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    logo: "./images/walmart-icon.png",
    title: "Electrode Progressive Product",
    short_name: "EPP",
    theme_color: "#FFFFFF"
  }
};
