/*
 * @Author: your name
 * @Date: 2020-02-28 14:48:31
 * @LastEditTime: 2020-03-15 00:45:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\src\router\routes\index.js
 */
import React from "react";

import {
  Route,
  Switch,
  withRouter,
  BrowserRouter,
  HashRouter
} from "react-router-dom";

import "./index.scss";

import { RouterConfig } from "./RouteConfig";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const DEFAULT_SCENE_CONFIG = {
  enter: "from-right",
  exit: "to-exit"
};

const getSceneConfig = location => {
  const matchedRoute = RouterConfig.find(config => {
    return new RegExp(`^${config.path}$`).test(location.pathname);
  });

  return (matchedRoute && matchedRoute.sceneConfig) || DEFAULT_SCENE_CONFIG;
};

let oldLocation = null;

const Routes = withRouter(({ location, history }) => {
  // 转场动画应该都是采用当前页面的sceneConfig，所以：
  // push操作时，用新location匹配的路由sceneConfig
  // pop操作时，用旧location匹配的路由sceneConfig
  let classNames = "";
  if (history.action === "PUSH") {
    classNames = "forward-" + getSceneConfig(location).enter;
  } else if (history.action === "POP" && oldLocation) {
    classNames = "back-" + getSceneConfig(oldLocation).exit;
  }

  // 更新旧location
  oldLocation = location;

  return (
    <TransitionGroup
      className={"router-wrapper"}
      childFactory={child => React.cloneElement(child, { classNames })}
    >
      {/* 添加超时时间会影响页面加载时间 ：timeout={5000} */}
      <CSSTransition timeout={0} key={location.pathname}>
        <Switch location={location}>
          {RouterConfig.map((config, index) => (
            <Route exact key={index} {...config} />
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
});

// export default class App extends React.PureComponent {
//   render() {
//     return (
//       <BrowserRouter>
//         <Routes/>
//       </BrowserRouter>
//     );
//   }
// }

const BasicRoute = () => (
  <HashRouter>
    <Routes />
    {/* <Switch>
      <Route exact path={"/"} component={App} />
      <Route exact path={"/test"} component={Test} />
      <Route exact path={"/dt"} component={DrawerTest} />
      <Route exact path={"/menu"} component={MenuTest} />
    </Switch> */}
  </HashRouter>
);

export default BasicRoute;
