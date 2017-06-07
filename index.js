'use strict';
var postcss = require('postcss');

module.exports = postcss.plugin('postcss-filter-progid', function (opts) {

  return function (css) {
    css.walkDecls('filter', function (decl) {
        // Probably replace with REGEX /progid/i case insensitive
      if (decl.value.indexOf('progid') > -1) {
        decl.remove();
      }
    });
  };

});
