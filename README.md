# PostCSS Filter Progid [![Build Status][ci-img]][ci]

[PostCSS] plugin remove legacy filter progid.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/DavidEngland/postcss-filter-progid.svg
[ci]:      https://travis-ci.org/DavidEngland/postcss-filter-progid

```css
.foo {
    /* Input example */
    background-image: linear-gradient(top, #fbfbfb, #f5f5f5);
    filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr='#fbfbfb', EndColorStr='#f5f5f5');
}
```

```css
.foo {
  /* Output example */
  background-image: linear-gradient(top, #fbfbfb, #f5f5f5);
}
```

## Usage

```js
postcss([ require('postcss-filter-progid') ])
```

See [PostCSS] docs for examples for your environment.
