/**
 * Gruntfile.js
 */

module.exports = function (grunt) {

  var appConfig = {
    watch: {
      html: {
        files: 'example/**/*.html',
        options: {
          livereload: true,
        },
      },
    },
    /************************************
     * grunt-contrib-connect
     * Start a connect web server
     ************************************/
    connect: {
      server: {
        options: {
          port: 9002,
          open: true,
          livereload: true
        }
      }
    },
  };

  // Init grunt configurations
  grunt.initConfig(appConfig);
  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  // Server task
  grunt.registerTask('server', [
    'connect',
    'watch'
  ]);
  // Default task
  grunt.registerTask('default', ['server']);
};