let mix = require("laravel-mix");
let NovaExtension = require("laravel-nova-devtool");

mix.extend("nova", new NovaExtension());

mix.setPublicPath("dist")
    .js("resources/js/field.js", "js")
    .sass("resources/sass/field.scss", "css")
    .vue({ version: 3 })
    .nova("marshmallow/live-update");
