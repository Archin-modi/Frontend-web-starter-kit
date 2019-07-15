# Frontend Web Starter Kit  (v1.0.0)
[![GitHub issues](https://img.shields.io/github/issues/Archin-modi/Frontend-web-starter-kit.svg?style=for-the-badge)](https://github.com/Archin-modi/Frontend-web-starter-kit/issues)
[![GitHub forks](https://img.shields.io/github/forks/Archin-modi/Frontend-web-starter-kit.svg?style=for-the-badge)](https://github.com/Archin-modi/Frontend-web-starter-kit/network)
[![GitHub stars](https://img.shields.io/github/stars/Archin-modi/Frontend-web-starter-kit.svg?style=for-the-badge)](https://github.com/Archin-modi/Frontend-web-starter-kit/stargazers)
[![GitHub license](https://img.shields.io/github/license/Archin-modi/Frontend-web-starter-kit.svg?style=for-the-badge)](https://github.com/Archin-modi/Frontend-web-starter-kit/blob/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/Archin-modi/Frontend-web-starter-kit.svg?style=for-the-badge)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FArchin-modi%2FFrontend-web-starter-kit)

## Overview

`Frontend Web Starter Kit` boilerplate for building web projects with Gulp. Uses Gulp cli 4.x.

### Features

| Feature                                | Summary                                                                                                                                                                                                                                                     |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Sass support                           | Compile [Sass](http://sass-lang.com/) into CSS with ease, bringing support for variables, mixins and more. (Run `gulp serve` or `gulp` for production)                                                                                                      |
| Watch | Watch for file changes, and automatically recompile build and reload webpages|
| Performance optimization               | Minify and concatenate JavaScript, CSS, HTML and images to help keep your pages lean. (Run `gulp` to create an optimised version of your project to `/dist`)                                                                                                                                                                                                                                        
| Browser Sync                 | Reload the browser in real-time anytime an edit is made without the need for an extension. (Run `gulp` and edit your files)                                                                                                                           |
| Cross-device Synchronization           | Synchronize clicks, scrolls, forms and live-reload across multiple devices as you edit your project. Powered by [BrowserSync](http://browsersync.io). (Run `gulp` and open up the IP provided on other devices on your network) |
| Static Files | Copy static files and folders into your dist directory|                    

## Quickstart

### Dependencies

##### required Packages: 

- [Node.js](http://nodejs.org/) @latest
- [Gulp Cli](http://gulpjs.com/)  V2.2.0 required

[Download](https://github.com/Archin-modi/Frontend-web-starter-kit/releases/latest) the boilerplate or clone this repository and build on what is included in the `src` directory.

There are two HTML starting points, from which you can choose:

- `gulp` - the default task, only for developement porpouse.
- `gulp prod` - produce optimize images, inject partial html page, minified css, scss to css, js concate, w3c validate


## Folder structure

- `src` : all the source file's are here. 
    - `Images` : Files in the src/images directory will be compiled to dist/images
    - `Js` : JavaScript files in the src/js directory will be compiled to dist/js.
    - `layout` : parital view include's here
    - `scss` : Files in the src/sass directory will be compiled to dist/css
    - `css` : Files in the src/css directory will be compiled to dist/css
    - all html page are container in src dirctory
- `gulp` : seprate task can handle in specific file and include in `gulp > task `

## Browser Support

Now, we officially aim to support the last four versions of the following browsers:

* Chrome
* Firefox
* Safari
* Edge
* Internet Explorer 9+

## Inspiration

Web Starter Kit is inspired by [Web Starter Kit](https://github.com/google/web-starter-kit/) and Yeoman's [generator-gulp-webapp](https://github.com/yeoman/generator-webapp).

## Contributing

Contributions, questions and comments are all welcome and encouraged.

## License

MIT
Copyright 2019
