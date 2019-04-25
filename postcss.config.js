module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-each'),
    require('postcss-nested'),
    require('postcss-preset-env')({
      browsers: 'last 2 versions',
      stage: 2,
    }),
  ],
};
