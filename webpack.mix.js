const mix = require('laravel-mix');

mix.js('index.js', 'dist/index.js');

mix.webpackConfig({
    output: {
        library: 'alpineCarousel',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'this'
    }
});

mix.disableNotifications();