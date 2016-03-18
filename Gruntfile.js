/**
 * Gruntfile.js
 */

module.exports = function (grunt) {

  var appConfig = {
    path: {
      src: 'src',
      dest: 'dist'
    },
    watch: {
      html: {
        files: 'example/**/*.html',
        options: {
          livereload: true,
        },
      },
      css: {
        files: '<%= path.src %>/css/*.css',
        tasks: ['copy:css'],
        options: {
          livereload: true,
        },
      },
      js: {
        files: '<%= path.src %>/js/*.js',
        tasks: ['copy:js'],
        options: {
          livereload: true,
        },
      }      
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
    /************************************
     * grunt-contrib-copy
     * Copy files and folders
     ************************************/
    copy: {
      css: {
        expand: true,
        cwd: 'src/',
        src: 'css/*',
        dest: '<%= path.dest %>/'
      },
      js: {
        expand: true,
        cwd: 'src/',
        src: 'js/*',
        dest: '<%= path.dest %>/',
      }
    },
    /************************************
     * grunt-contrib-uglify
     * Minify files with UglifyJS
     ************************************/
    uglify: {
      js: {
        files: {
          '<%= path.dest %>/js/script.min.js': ['<%= path.dest %>/js/script.js']
        }
      }
    },
    /************************************
     * grunt-contrib-cssmin
     * Minify CSS
     ************************************/
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          '<%= path.dest %>/css/style.min.css': ['<%= path.dest %>/css/style.css']
        }
      }
    }
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

  // Server task
  grunt.registerTask('build', [
    'copy',
    'uglify',
    'cssmin'
  ]);

  // Default task
  grunt.registerTask('default', ['copy', 'server']);
};
