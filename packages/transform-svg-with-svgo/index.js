const SVGO = require('svgo');

module.exports = (options) => {
    const svgo = new SVGO(options);
    return async (svg) => (await svgo.optimize(svg)).data;
};
