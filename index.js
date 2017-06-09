'use strict';
var postcss = require('postcss');

module.exports = postcss.plugin('postcss-filter-progid', function(opts) {
    opts = opts || {};
    return function(css) {
        css.walkDecls('filter', function(decl) {
            // Probably replace with REGEX /progid/i case insensitive
            if (decl.value.indexOf('progid') > -1) {
                decl.remove();
            }
            if (decl.value.indexOf('alpha') > -1) {
                decl.remove();
            }
        });
        css.walkDecls('-ms-filter', function(decl) {
            // Probably replace with REGEX /progid/i case insensitive
            if (decl.value.indexOf('progid') > -1) {
                decl.remove();
            }
        });
    };

});