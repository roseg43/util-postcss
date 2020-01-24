# util-postcss
A dead-simple utility to apply postcss and stylefmt linting to SCSS files.

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# What does this do?
This repository contains a custom gulp task that autoprefixes, sorts, and lints SCSS files using the following plugins:
- gulp-postcss
- autoprefixer
- postcss-sorting
- gulp-stylefmt

# Requirements
- npm v6.13.6+
- gulp-cli v2.2.0+
- gulp v4.0.2+

See [this guide](https://gulpjs.com/docs/en/getting-started/quick-start) for getting started with Gulp, including setup.

# Installation
Clone this repo, open a terminal in the project directory, and run `npm install`.

# Using this utility
Simply add your SASS files to `/src`, and then run `gulp css` in the project root. If everything worked correctly, your modified files will be in `/dest`
