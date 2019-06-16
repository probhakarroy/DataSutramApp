module.exports = (grunt) => {
    //load plugins
    [
        'grunt-mocha-test',
        'grunt-eslint'
    ].forEach((task) => {
        grunt.loadNpmTasks(task);
    });

    //configure plugins
    grunt.initConfig({
        mochaTest : {
            all: {
                src : 'qa/tests-*.js', 
                options : {ui : 'tdd', timeout : 100000}
            }
        },

        eslint : {
            app : [
                'app.js',
                'app_cluster.js',
                'lib/**/*.js',
                'handlers/**/*.js',
                'models/**/*.js'
            ],
            qa : [
                'gruntfile.js',
                'qa/**/*.js',
            ]
        }
    });

    //register tasks
    grunt.registerTask('default', ['mochaTest', 'eslint']);
}