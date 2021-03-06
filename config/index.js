const path = require('path')
const config = {
  projectName: 'taro-vue-template',
  date: '2022-1-24',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    // 375: 1 / 2
  },
  alias: {
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [
    ['@tarojs/plugin-html']
  ],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'vue',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      },
      // "postcss-px-scale": {
      //   "enable": true,
      //   "config": {
      //     "scale": 0.5, //缩放为1/2
      //     "units": "rpx",
      //     "includes": ["taro-ui"]
      //   }
      // },
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    // 经过这一配置之后，代码中引入的处于 `node_modules/taro-ui/` 路径下的样式文件均会经过 postcss 的编译处理。
    // esnextModules: ['nutui-taro'],
    esnextModules: ['taro-ui'],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      },
      "postcss-px-scale": {
        "enable": true,
        "config": {
          "scale": 0.5, //缩放为1/2
          "units": "rem",
          "includes": ["taro-ui"]
        }
      },
    },
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
