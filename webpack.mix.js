let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

mix.js('src/js/app.js', 'assets')
   .js('src/js/collection-filter.js', 'assets')
   .sass('src/scss/app.scss', 'assets')
   .options({
      processCssUrls: false,
      postCss: [tailwindcss('tailwind.config.js')]
   })