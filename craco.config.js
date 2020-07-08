// const path = require('path');

const CracoLessPlugin = require("craco-less");

// const resolve = dir => path.resolve(__dirname, dir);

module.exports = function ({ env }) {
  return {
    plugins: [
      { plugin: CracoLessPlugin },
     
    ],
    style: {
      postcss: {
        mode: "extends" /* (default value) */ || "file",
        plugins: [
          require("postcss-px-to-viewport")({
            viewportWidth: 750,
            unitPrecision: 2,
            viewportUnit: "vw",
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
          }),
        ],
      },
    },
  };
};
