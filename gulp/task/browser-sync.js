var browserSync = require('./../browser-sync');

const serverSync = () =>
    browserSync.init({
        server: 'dist'
    });

module.exports = serverSync;