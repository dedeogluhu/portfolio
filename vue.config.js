const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../dedeogluhu.github.io/src/'),
    devServer: {
        proxy: {
            '/api': {
                target: `http://localhost:${process.env.PORT || 8080}`
            }
        }
    }
}