module.exports = function(grunt) {

require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks  
 
grunt.registerTask('default', ['sass']);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
        sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'main.css': 'main.scss'
            }
        }
    },
    gitcommit: {
    your_target: {
      options: {
        // Target-specific options go here. 
                message: 'Testing',
                noVerify: true,
                noStatus: false
      },
      files: {
          // Specify the files you want to commit 
          src: ['style.css']
      }
    }
  }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //Git
  grunt.loadNpmTasks('grunt-git');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};