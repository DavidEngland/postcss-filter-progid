'use strict';
const postcss = require('postcss');

/**
 * PostCSS plugin to remove legacy IE filter/progid declarations from CSS.
 *
 * @param {Object} [opts] - Plugin options.
 * @param {boolean} [opts.removeAlpha=true] - Remove 'alpha' filters as well.
 * @returns {Function} PostCSS plugin.
 *
 * @example
 * // postcss.config.js
 * module.exports = {
 *   plugins: [
 *     require('postcss-filter-progid')({ removeAlpha: false })
 *   ]
 * }
 */
module.exports = postcss.plugin('postcss-filter-progid', (opts = {}) => {
    const { removeAlpha = true } = opts;
    const progidRegex = /progid/i;
    const alphaRegex = /alpha/i;

    return (root) => {
        root.walkDecls('filter', (decl) => {
            if (progidRegex.test(decl.value) || (removeAlpha && alphaRegex.test(decl.value))) {
                decl.remove();
            }
        });
        root.walkDecls('-ms-filter', (decl) => {
            if (progidRegex.test(decl.value)) {
                decl.remove();
            }
        });
    };
});