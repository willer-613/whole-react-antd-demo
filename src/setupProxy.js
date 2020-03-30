/*
 * @Author: your name
 * @Date: 2020-03-15 01:29:42
 * @LastEditTime: 2020-03-15 01:53:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\src\setupProxy.js
 */

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  console.log('app',app)
  app.use(
    createProxyMiddleware("/baidu", {
      //`api`是需要转发的请求
      target: "https://www.baidu.com", // 这里是接口服务器地址
      changeOrigin: true
    })
  );
};
