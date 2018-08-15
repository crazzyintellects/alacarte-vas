module.exports = {
  "globDirectory": __dirname,
  "globPatterns": [
    "**/*.{js,JPG,jpg,png,css}",
    "**/*.{html,js,ico,css}",
    "src/assets/*.{jpg,png}",
    "src/*.js"
  ],
  "swSrc": "swbase.js",
  "swDest": "sw.js",
  "globIgnores": [
    "workbox-cli-config.js",
    "node_modules/**",
    "images/**",
    "webpack.config.js",
  ],
  maximumFileSizeToCacheInBytes: 20 * 1024 * 1024,
};
