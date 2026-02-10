exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        deepmerge$: require.resolve('deepmerge/dist/cjs.js'),
      },
    },
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  const opts = { loose: true };

  actions.setBabelPlugin({
    name: require.resolve('@babel/plugin-transform-class-properties'),
    options: opts,
  });
  actions.setBabelPlugin({
    name: require.resolve('@babel/plugin-transform-private-methods'),
    options: opts,
  });
  actions.setBabelPlugin({
    name: require.resolve('@babel/plugin-transform-private-property-in-object'),
    options: opts,
  });
};
