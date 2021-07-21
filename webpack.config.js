const { merge } = require('webpack-merge');
const common = require('./config/webpack.common.js');
const dev = require('./config/webpack.dev.js');
const prod = require('./config/webpack.prod.js');

const path = require('path');
const BUILD_DIR = path.resolve(__dirname, './docs');
const APP_DIR = path.resolve(__dirname, './src');

const configDirs = {
    BUILD_DIR: BUILD_DIR,
    APP_DIR: APP_DIR
}

module.exports = env => {
    switch (env) {
        case 'dev':
            return merge(common(configDirs), dev(configDirs));
        case 'prod':
            return merge(common(configDirs), prod);
        default:
            throw new Error("Wrong webpack build parameter. Possible choices: 'dev' or 'prod'.");
    }
}
