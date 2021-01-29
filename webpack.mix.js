const mix = require('laravel-mix');

mix.js('index.js', 'dist/index.min.js');
mix.js('example/example.js', 'example/example.min.js');

mix.disableNotifications();