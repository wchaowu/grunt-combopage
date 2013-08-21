/*
 * grunt-combopage
 * https://github.com/ginano/grunt-combopage
 *
 * Copyright (c) 2013 ginano
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    combopage: {
      test: {
        options:{
          cssPath:'output/',
          cssVersion:true,
          jsPath:'output/index_all.js',
          jsVersion:false,
          comboHtml:true,
          comboHtmlOptions:{
            removeComments:true,
            collapseWhitespace:true
          }
        },
        files: {
          'test/test_new.html': ['test/test.html']
        }
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['combopage']);
};
