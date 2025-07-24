# Change Log
This project adheres to [Semantic Versioning](http://semver.org/).

## [2.0.0] - 2025-07-24
### Breaking Changes
- **BREAKING**: Modernized codebase with ES6+ features
- **BREAKING**: Updated PostCSS plugin API usage

### Added
- Enhanced JSDoc documentation with detailed examples
- Comprehensive usage examples in README
- Better error handling and edge case coverage
- Modern ES6+ arrow functions and destructuring

### Changed
- Improved regex matching for better performance
- Updated code structure for better maintainability
- Enhanced plugin configuration options
- Better TypeScript compatibility

### Fixed
- Improved handling of various progid filter formats
- Better detection of alpha filters
- More robust parsing of malformed CSS

## [1.0.0] - Initial Release
### Added
- Basic progid and -ms-filter removal functionality
- Optional alpha filter removal with `removeAlpha` option
- WordPress theme build automation support
- PostCSS plugin infrastructure

### Features
- Removes `filter: progid:DXImageTransform.Microsoft.*` declarations
- Removes `-ms-filter` declarations
- Optional removal of `filter: alpha(opacity=*)` declarations
- Configurable options via plugin parameters

* [[`46665be76e`](https://github.com/DavidEngland/postcss-filter-progid/commit/46665be76e)] - sync (Dave England)