var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}
it('Removes filter declarition with "progid" in it.', () => {
  return run(".foo{background-image:linear-gradient(top,#fbfbfb,#f5f5f5);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr='#fbfbfb',EndColorStr='#f5f5f5')}",
             ".foo{background-image:linear-gradient(top,#fbfbfb,#f5f5f5)}");
});
