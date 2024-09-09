module.exports = {
  // ... your other configuration
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: /node_modules/ // Exclude node_modules from source-map-loader
      }
    ]
  }
};
