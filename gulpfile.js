var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sorting = require('postcss-sorting');
var prettier = require('gulp-prettier');

gulp.task('css', function () {
    var processors = [
        autoprefixer(),
        sorting({
            "order": [
                "custom-properties",
                "dollar-variables",
                {
                  "type" : "at-rule",
                  "name" : "include"
                },
                {
                  "type"     : "at-rule",
                  "name"     : "include",
                  "hasBlock" : true
                },
                "declarations",
                "rules",
                "at-rules",
                {
                  "type"     : "rule",
                  "selector" : /^&/
                },
                {
                  "type"     : "rule",
                  "selector" : /^&:\w+$/
                },
                {
                  "type"     : "rule",
                  "selector" : /^&:   : \w+$/
                },
                {
                  "type" : "at-rule",
                  "name" : "include",
                  "parameter" : "media"
                },
                {
                  "type" : "at-rule",
                  "name" : "media"
                }
            ],
            "properties-order": [
                "content",
                "order",
                "z-index",
                "position",
                "top",
                "bottom",
                "left",
                "right",
                "display",
                "visibility",
                "backface-visibility",
                "opacity",
                "filter",
                "mix-blend-mode",
                "transform",
                "transform-style",
                "perspective",
                "flex-direction",
                "flex-flow",
                "justify-content",
                "align-items",
                "align-content",
                "flex-basis",
                "flex-wrap",
                "flex-grow",
                "flex-shrink",
                "grid",
                "grid-template",
                "grid-template-columns",
                "grid-auto-columns",
                "grid-template-rows",
                "grid-auto-rows",
                "grid-template-areas",
                "grid-auto-flow",
                "grid-gap",
                "outline",
                "outline-width",
                "outline-style",
                "outline-color",
                "outline-offset",
                "border",
                "border-top",
                "border-right",
                "border-bottom",
                "border-left",
                "border-radius",
                "border-top-left-radius",
                "border-top-right-radius",
                "border-bottom-right-radius",
                "border-bottom-left-radius",
                "border-collapse",
                "margin",
                "margin-top",
                "margin-right",
                "margin-bottom",
                "margin-left",
                "padding",
                "padding-top",
                "padding-right",
                "padding-bottom",
                "padding-left",
                "max-height",
                "min-height",
                "height",
                "max-width",
                "min-width",
                "width",
                "background",
                "background-image",
                "background-color",
                "background-position",
                "background-size",
                "background-repeat",
                "background-origin",
                "background-clip",
                "background-attachment",
                "resize",
                "box-sizing",
                "overflow",
                "overflow-x",
                "overflow-y",
                "scroll-behavior",
                "object-fit",
                "object-position",
                "float",
                "empty-cells",
                "list-style",
                "list-style-image",
                "list-style-type",
                "list-style-position",
                "text-indent",
                "word-break",
                "word-wrap",
                "word-spacing",
                "text-overflow",
                "hyphens",
                "white-space",
                "text-decoration",
                "vertical-align",
                "text-transform",
                "letter-spacing",
                "direction",
                "text-shadow",
                "font",
                "font-style",
                "font-family",
                "font-size",
                "line-height",
                "font-weight",
                "font-stretch",
                "font-kerning",
                "font-variant",
                "color",
                "cursor",
                "pointer-events",
                "transition",
                "transition-property",
                "transition-duration",
                "transition-timing-function",
                "transition-delay",
                "animation",
                "animation-name",
                "animation-duration",
                "animation-timing-function",
                "animation-delay",
                "animation-iteration-count",
                "animation-direction",
                "animation-fill-mode",
                "animation-play-state"
        ],
        "unspecified-properties-position" : "bottom"
        })
    ];
    return gulp.src('./src/*.scss')
        .pipe(postcss(processors, {syntax: require('postcss-scss')}))
        .pipe(prettier({
            tabWidth: 4,
            useTabs: true
        }))
        .pipe(gulp.dest('./dest'));
});
