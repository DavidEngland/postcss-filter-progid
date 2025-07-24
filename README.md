# PostCSS Filter Progid [![Build Status][ci-img]][ci]

A [PostCSS] plugin to automatically remove legacy IE `filter` and `progid` declarations from your CSS.  
Useful for cleaning up modern WordPress themes and automating your workflow.

[PostCSS]: https://github.com/postcss/postcss  
[ci-img]:  https://travis-ci.org/DavidEngland/postcss-filter-progid.svg  
[ci]:      https://travis-ci.org/DavidEngland/postcss-filter-progid  

## What it does

Removes all `filter: progid:...` and `-ms-filter:...` declarations, and (optionally) `alpha` filters, for cleaner, standards-based CSS.

```css
/* Input example */
.foo {
    background-image: linear-gradient(to top, #fbfbfb, #f5f5f5);
    filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr='#fbfbfb', EndColorStr='#f5f5f5');
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr='#fbfbfb', EndColorStr='#f5f5f5')";
    filter: alpha(opacity=80);
}
```

```css
/* Output example */
.foo {
    background-image: linear-gradient(to top, #fbfbfb, #f5f5f5);
}
```

## Usage

Install via npm:

```sh
npm install --save-dev postcss-filter-progid
```

Add to your PostCSS config:

```js
// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-filter-progid')({ removeAlpha: true }) // removeAlpha is optional, default: true
  ]
}
```

Or use directly:

```js
postcss([ require('postcss-filter-progid')({ removeAlpha: false }) ])
```

### Options

- `removeAlpha` (boolean, default: `true`):  
  If `true`, also removes `filter: alpha(...)` declarations.

## Changelog

### [2.0.0] - 2025-07-24
- **BREAKING**: Modernized codebase with ES6+ features
- Improved regex matching for better performance
- Enhanced JSDoc documentation
- Added comprehensive examples and usage documentation
- Better error handling and edge case coverage

### [1.0.0] - Initial Release
- Basic progid and -ms-filter removal
- Optional alpha filter removal
- WordPress theme build automation support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Repository

GitHub: [https://github.com/DavidEngland/postcss-filter-progid](https://github.com/DavidEngland/postcss-filter-progid)

## License

MIT

See [PostCSS] docs for more usage examples.