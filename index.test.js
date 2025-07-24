const postcss = require('postcss');
const plugin = require('./index');

/**
 * Test helper function to process CSS with the plugin
 * @param {string} input - Input CSS
 * @param {string} output - Expected output CSS
 * @param {Object} opts - Plugin options
 * @returns {Promise} PostCSS processing result
 */
async function run(input, output, opts = {}) {
    const result = await postcss([plugin(opts)]).process(input, { from: undefined });
    expect(result.css).toEqual(output);
    expect(result.warnings()).toHaveLength(0);
    return result;
}

describe('postcss-filter-progid', () => {
    describe('progid filter removal', () => {
        it('removes filter declaration with progid', async () => {
            await run(
                '.foo{background-image:linear-gradient(to top,#fbfbfb,#f5f5f5);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr="#fbfbfb",EndColorStr="#f5f5f5")}',
                '.foo{background-image:linear-gradient(to top,#fbfbfb,#f5f5f5)}'
            );
        });

        it('removes -ms-filter declarations', async () => {
            await run(
                '.foo{-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#fbfbfb,endColorstr=#f5f5f5)"}',
                '.foo{}'
            );
        });

        it('removes multiple progid filters', async () => {
            await run(
                '.foo{filter:progid:DXImageTransform.Microsoft.gradient();filter:progid:DXImageTransform.Microsoft.Alpha(opacity=50)}',
                '.foo{}'
            );
        });

        it('preserves non-progid filters', async () => {
            await run(
                '.foo{filter:blur(5px);filter:progid:DXImageTransform.Microsoft.gradient();filter:brightness(1.2)}',
                '.foo{filter:blur(5px);filter:brightness(1.2)}'
            );
        });
    });

    describe('alpha filter removal', () => {
        it('removes alpha filters by default', async () => {
            await run(
                '.foo{filter:alpha(opacity=80)}',
                '.foo{}'
            );
        });

        it('preserves alpha filters when removeAlpha is false', async () => {
            await run(
                '.foo{filter:alpha(opacity=80)}',
                '.foo{filter:alpha(opacity=80)}',
                { removeAlpha: false }
            );
        });

        it('removes alpha filters with various formats', async () => {
            await run(
                '.foo{filter:Alpha(Opacity=50);filter:ALPHA(opacity=100)}',
                '.foo{}'
            );
        });
    });

    describe('edge cases', () => {
        it('handles empty CSS', async () => {
            await run('', '');
        });

        it('handles CSS without filter properties', async () => {
            await run('.foo{color:red;margin:10px}', '.foo{color:red;margin:10px}');
        });

        it('handles malformed progid filters', async () => {
            await run(
                '.foo{filter:progid:broken;}',
                '.foo{}'
            );
        });

        it('preserves other CSS properties', async () => {
            await run(
                '.foo{color:red;filter:progid:DXImageTransform.Microsoft.gradient();margin:10px}',
                '.foo{color:red;margin:10px}'
            );
        });
    });

    describe('case sensitivity', () => {
        it('removes progid filters case-insensitively', async () => {
            await run(
                '.foo{filter:PROGID:DXImageTransform.Microsoft.gradient()}',
                '.foo{}'
            );
        });

        it('removes alpha filters case-insensitively', async () => {
            await run(
                '.foo{filter:ALPHA(opacity=50)}',
                '.foo{}'
            );
        });
    });
});