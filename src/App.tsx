import React, { Suspense, lazy } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const RouterList = [
  { component: lazy(() => import("./pages/home")), pathname: "/" },
];

export default () => {
  return (
    <Router>
      <div className={"app"}>
        <Suspense fallback={<div>loading</div>}>
          {" "}
          <Switch>
            {RouterList.map((s: any, i) => {
              let PageModule = s.component; // 给匿名组件取个名字，便于下面用
              return (
                <Route
                  key={"router" + i}
                  path={s.pathname}
                  exact
                  render={(props) => <PageModule {...props} />} // 这里用 render
                />
              );
            })}
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};
