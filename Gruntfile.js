'use strict';
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-shopify');

    grunt.initConfig({
        shopify: {
            options: {
                api_key: "key",
                password: "pass",
                url: "example.myshopify.com",
                base: "shop/"
            }
        },
        less: {
            development: {
                options: {
                    paths: ["./assets"],
                    cleancss: true,
                    modifyVars: {
                        d: '"/"'
                    }
                },
                files: {
                    "./assets/css/style.css": "./assets/less/style.less",
                    "./assets/css/checkout.css": "./assets/less/checkout.less"
                }
            }
        },
        uglify: {
            options: {
                compress: true,
                beautify: false,
                mangle: false
            },
            my_target: {
                files: {
                    './assets/js/plugins.min.js': [
                        './assets/js/lib/shopify/cart.js',
                        './assets/js/lib/zoombie.js',
                        './assets/js/lib/bxslider4.js',
                        './assets/js/lib/modernizr/modernizr.js',
                        './assets/js/lib/smoothDivScroll/jquery.smoothdivscroll.js'
                    ],
                    './assets/js/init.min.js': ['./assets/js/init.js']
                }
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: [
                        './assets/img/**',
                        './assets/css/**',
                        './assets/fnt/*/**',
                        './assets/js/plugins.min.js',
                        './assets/js/init.min.js'
                    ],
                    dest: './shop/assets/',
                    filter: 'isFile'
                }, 
                //{
                  //expand: true,
                  //flatten: true,
                  //src: [
                  //    './config/**'
                  //],
                  //dest: './shop/config/',
                  //filter: 'isFile'
                //}, 
                {
                    expand: true,
                    flatten: true,
                    src: [
                        './layout/**'
                    ],
                    dest: './shop/layout/',
                    filter: 'isFile'
                }, {
                    expand: true,
                    flatten: true,
                    src: [
                        './snippets/**'
                    ],
                    dest: './shop/snippets/',
                    filter: 'isFile'
                }, {
                    expand: true,
                    flatten: true,
                    src: [
                        './templates/**'
                    ],
                    dest: './shop/templates/',
                    filter: 'isFile'
                }]
            }
        },
        watch: {
            less: {
                files: [
                    './assets/less/**',
                    './assets/fnt/*.less'
                ],
                tasks: ['less']
            },
            uglify: {
                files: [
                    './assets/js/**'
                ],
                tasks: ['uglify']
            },
            copy: {
                files: [
                    './assets/fnt/*/**',
                    './assets/img/**',
                    './assets/css/**',
                    './assets/js/**',
                  //'./config/**',
                    './layout/**',
                    './snippets/**',
                    './templates/**'
                ],
                tasks: ['copy']
            },
            shopify: {
                files: ["./shop/**"],
                tasks: ["shopify"]
            }
        }
    });
};