const webpack = require('webpack')
// Karma configuration
// Generated on Thu Jul 27 2017 15:35:02 GMT+0800 (CST)

module.exports = function(config) {
  function getCssLoader() {
    if (process.env.NODE_ENV === 'production') {
      return ExtractTextPlugin.extract({
        use: [
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      })
    }
    return [
      'style-loader',
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ]
  }
  config.set({
    // 解析定義在files及exclude裡的相對路徑的根目錄
    basePath: '',
    // 使用的插件列表，需安裝對應的karma-*插件
    plugins: [
      'karma-coverage-istanbul-reporter',
      'karma-mocha',
      'karma-sinon-chai',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-spec-reporter',
      'karma-phantomjs-launcher'
    ],
    // 測試的框架列表
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],

    // 讀取的檔案清單
    files: [
      './test/index.js'
    ],

    // 被排除的檔案清單
    exclude: [
    ],

    // 事先處理器的列表
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './test/index.js': ['webpack', 'sourcemap'],
    },

    // reporters列表
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage-istanbul'],

    // coverage-istanbul 输出配置，报告文件输出于根目录下的 coverage 文件夹内
    coverageIstanbulReporter: {
       // reports can be any that are listed here: https://github.com/istanbuljs/istanbul-reports/tree/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib
      reports: ['html', 'lcovonly', 'text-summary'],
       // base output directory
      dir: './coverage',
       // if using webpack and pre-loaders, work around webpack breaking the source path
      fixWebpackSourcePaths: true,
       // Most reporters accept additional config options. You can pass these through the `report-config` option
      'report-config': {
        // all options available at: https://github.com/istanbuljs/istanbul-reports/blob/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib/html/index.js#L135-L137
        html: {
          // outputs the report in ./coverage/html
          subdir: 'html'
        }
      }
    },

    // 預設Server連接阜
    port: 9876,

    // 開啟/關閉彩色輸出樣式
    colors: true,

    // 記錄級別
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // 開啟/關閉監視文件，當文件被修改將自動執行
    autoWatch: true,

    // 預設開啟瀏覽器，Chrome以預設內建啟動器，其他瀏覽器需安裝對應的起動器Launcher
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['Chrome'],

    // 單作用模式
    // 當預設為開啟，將會捕捉瀏覽器事件，執行測試及離開
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    webpackMiddleware: {
      noInfo: true
    },

    // 若事先處理器中有webpack，則需做webpack設定，如：loader，可透過Babel將語法轉換為ES5標準
    webpack: {
      output: {
        path: __dirname + '/lib',
        filename: '[name].js',
        libraryTarget: 'umd'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
          {
            test: /\.(c|s[ac])ss$/,
            use: getCssLoader(),
          },
          {
            test: /img\/.*\.(png|jpg|jpeg|gif|svg)(\?[a-z0-9-]+)?$/,
            loader: 'file-loader?name=[path][name]-[hash:7].[ext]',
          },
          {
            test: /font\/.*\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9-]+)?$/,
            loader: 'file-loader?name=[path][name]-[hash:7].[ext]',
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader',
          },
          {
            test: /\.(js)$/,
            loader: 'istanbul-instrumenter-loader',
            exclude: /node_modules/,
            include: /src|packages/,
            enforce: 'post',
            options: {
              esModules: true
            }
          },
        ],
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        })
      ]
    },
    
  })
}
