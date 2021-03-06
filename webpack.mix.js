const mix = require('laravel-mix');

mix.js('src/index.js', 'dist/index.js');

mix.webpackConfig({
    output: {
        library: 'alpineCarousel',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    }
});

mix.disableNotifications();