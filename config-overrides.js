/*
 * @Author: your name
 * @Date: 2020-02-27 00:17:34
 * @LastEditTime: 2020-02-27 00:36:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\config-overrides.js
 */
// const rewireLess = require("react-app-rewire-less");
// const { injectBabelPlugin } = require("react-app-rewired");
const { override, fixBabelImports } = require("customize-cra");
module.exports = override(
  // 扩展 webpack ==> 支持less
  // config = rewireLess(config, env);
  // // 配置loader参数
  // config = rewireLess.withLoaderOptions({
  //   // 修改默认颜色 实现自定义主题
  //   modifyVars: {
  //     "@primary-color": "#1DA57A"
  //   }
  // })(config, env);
  // antd 按需加载配置
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  })
);
