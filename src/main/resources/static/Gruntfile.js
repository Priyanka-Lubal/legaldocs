module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        vulcanize: {
            default: {
                options: {
                    inlineScripts:true,
                    inlineCss:true,
                    stripComments:true
                },
                files: {
                    'vulcanized/build.html':'index.html'
                },
            },
        },
        htmlmin: {
            file: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    collapseInlineTagWhitespace:true,
                    minifyCSS:true,
                    minifyJS:true,
                },
                files: {
                    src: 'vulcanized/build.html',
                    dest:'vulcanized/minified'
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-vulcanize');
    grunt.loadNpmTasks('grunt-htmlmin');
    // Default task(s).
    grunt.registerTask('default', ['vulcanize','htmlmin']);

};