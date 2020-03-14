/*
 * @Author: your name
 * @Date: 2020-03-15 00:12:20
 * @LastEditTime: 2020-03-15 00:14:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\src\config\index.js
 */

/*发布配置*/
//设置是开发(1)、测试(2)、生产(3)，number类型
const releaseConfigure = 1;
//网路请求头部设置
//判断是否是本地环境，如果是，则加上ad账号
const _domain = document.domain;
let _parm = {};
switch (_domain) {
  case "localhost":
    _parm = {
      /* 'Content-Type':'application/x-www-form-urlencoded'*/
      "Content-Type": "application/json",
      ad: "ooo"
    };
    break;
  default:
    _parm = {
      "Content-Type": "application/json"
    };
    break;
}
const requestHeader = _parm;

//设置是开发(1)、测试(2)、生产(3)，number类型
let urlhttp = "http://";
let domain = "";
switch (releaseConfigure) {
  case 1:
    //开发
    domain = "";
    break;
  case 2:
    //测试
    domain = "";
    break;
  case 3:
    //生产
    domain = "";
    break;
  default:
    break;
}
//项目后台发布名称
let Backstage = "api/services/";

//服务器域名
let host = domain + Backstage;

//请求基础数据
global.GETUSERLIST = urlhttp + host + "Common/GetUserList";

export { releaseConfigure, requestHeader };
