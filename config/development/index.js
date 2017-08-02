import path from 'path';

module.exports = {
    env: require('./env'),
    cssSourceMap: false,
    assetBuildPath: path.resolve(__dirname, '..', '..', 'build'),
    webpackDevServerPort: 8080,
    browserSyncPort: 4000
}
