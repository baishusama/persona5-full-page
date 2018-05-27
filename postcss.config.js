module.exports = {
  // parser: 'sugarss',
  plugins: {
    'rucksack-css': {},
    lost: {},
    autoprefixer: {}
    /**
     * `cssnano: {}`：总是会在 webpack 时报 style 中的 url 参数相关的错误
     * 据说，[webpack4+ 以上的版本已经集成了 cssnano](https://www.jianshu.com/p/b2fd8a8bf8c2)
     */
  }
};
