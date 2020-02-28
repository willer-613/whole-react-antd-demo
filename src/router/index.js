/*
 * @Author: your name
 * @Date: 2020-02-27 00:59:29
 * @LastEditTime: 2020-02-28 14:45:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\src\router\index.js
 */
import React from "react";
import { HashRouter, Route, Switch, withRouter } from "react-router-dom";
// import App from "../App";
// import Test from "../views/check";
// import DrawerTest from "../views/drawer";
// import MenuTest from "../views/menu";

import { RouterConfig } from "./RouteConfig";

const Routes = withRouter(({ location, history }) => {
  return (
    <Switch>
      {RouterConfig.map((config, index) => (
        <Route exact key={index} {...config} />
      ))}
    </Switch>
  );
});

// import { TransitionGroup, CSSTransition } from "react-transition-group";
// const ANIMATION_MAP = {
//   PUSH: "forward",
//   POP: "back"
// };
// const Routes = withRouter(({ location, history }) => {
//   console.log(location, history);
//   return (
//     <TransitionGroup
//       className={"router-wrapper"}
//       childFactory={child =>
//         React.cloneElement(child, { classNames: ANIMATION_MAP[history.action] })
//       }
//     >
//       <CSSTransition timeout={5000} key={location.pathname}>
//         <Switch location={location}>
//           <Route exact path={"/"} component={App} />
//           <Route exact path={"/test"} component={Test} />
//           <Route exact path={"/dt"} component={DrawerTest} />
//           <Route exact path={"/menu"} component={MenuTest} />
//         </Switch>
//       </CSSTransition>
//     </TransitionGroup>
//   );
// });

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
