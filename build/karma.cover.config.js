/**
 * Created by FDD on 2017/11/6.
 * @desc 单元测试覆盖率
 */

const base = require('./karma.base.config.js')
module.exports = function (config) {
  const options = Object.assign(base, {
    browsers: ['Chrome'],
    reporters: ['mocha', 'coverage'],
    logLevel: config.LOG_INFO,
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    singleRun: true
  })
  config.set(options)
}
