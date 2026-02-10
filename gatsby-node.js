/**
 * Force Gatsby's SSR bundle to resolve deepmerge to the CommonJS entry.
 *
 * In some workspace/hoisting setups, webpack can pick the ESM build of
 * deepmerge and `require("deepmerge")` then becomes a namespace object
 * instead of a callable function, causing:
 *   TypeError: merge is not a function
 */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        deepmerge$: require.resolve('deepmerge/dist/cjs.js'),
      },
    },
  });
};
