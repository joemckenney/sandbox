module.exports = {
  "plugins": ["react-css-modules"],
  "presets": [
    "@babel/preset-react",
    [
      "@babel/preset-env", {
        targets: { chrome: 72 },
        modules: false
      }
    ]
  ]
}
