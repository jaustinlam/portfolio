module.exports = function(grunt) {
  grunt.initConfig({
    responsive_images: {
        myTask: {
            options: {
                sizes: [{
                    name: "small",
                    width: 300,
                    height: 300,
                    quality: 60
                },{
                    name: "medium",
                    width: 768,
                    quality: 60
                },{
                    name: "large",
                    width: 1080,
                    quality: 80
                }]
            },
            files: [{
                expand: true,
                src: ['*.{gif,jpg,png}'],
                cwd: 'images/',
                dest: 'images/optimized_images/'
            }]
        },
    },
  });
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);
};