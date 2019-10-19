module.exports = {
  presets: [['@babel/env', {loose: true}]],
  env: {
    esm: {
      presets: [['@babel/env', {loose: true, modules: false}]]
    }
  }
};
