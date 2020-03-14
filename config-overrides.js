/*
 * @Author: your name
 * @Date: 2020-02-27 00:17:34
 * @LastEditTime: 2020-03-14 22:10:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\config-overrides.js
 */
// const rewireLess = require("react-app-rewire-less");
// const { injectBabelPlugin } = require("react-app-rewired");
const {
  override,
  addDecoratorsLegacy,
  fixBabelImports,
  addWebpackAlias,
  overrideDevServer,
  watchAll
} = require("customize-cra");

const path = require("path");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const myPlugin = [
  new UglifyJsPlugin({
    uglifyOptions: {
      warnings: false,
      compress: {
        drop_debugger: true,
        drop_console: true
      }
    }
  })
];

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  webpack: override(
    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),
    // 扩展 webpack ==> 支持less
    // config = rewireLess(config, env);
    // // 配置loader参数
    // config = rewireLess.withLoaderOptions({
    //   // 修改默认颜色 实现自定义主题
    //   modifyVars: {
    //     "@primary-color": "#1DA57A"
    //   }
    // })(config, env);
    // add an alias for "ag-grid-react" imports
    addWebpackAlias({
      "@": resolve("src")
    }),
    // antd 按需加载配置
    fixBabelImports("import", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: "css"
    }),
    config => {
      //暴露webpack的配置 config ,evn
      // 去掉打包生产map 文件
      // config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
      if (process.env.NODE_ENV === "production") config.devtool = false;
      if (process.env.NODE_ENV !== "development")
        config.plugins = [...config.plugins, ...myPlugin];
      //1.修改、添加loader 配置 :
      // 所有的loaders规则是在config.module.rules(数组)的第二项
      // 即：config.module.rules[2].oneof  (如果不是，具体可以打印 一下是第几项目)
      // 修改 sass 配置 ，规则 loader 在第五项(具体看配置)
      // const loaders = config.module.rules.find(rule =>
      //   Array.isArray(rule.oneOf)
      // ).oneOf;
      // loaders[5].use.push({
      //   loader: "sass-resources-loader",
      //   options: {
      //     resources: path.resolve(__dirname, "src/asset/base.scss") //全局引入公共的scss 文件
      //   }
      // });

      return config;
    }
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll()
  )
};
