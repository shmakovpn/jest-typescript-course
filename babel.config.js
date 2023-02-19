// babel.config.js
module.exports = {
  // подключаем плагин rewire
  plugins: ['babel-plugin-rewire'],
  // настраиваем present-ы
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
};
