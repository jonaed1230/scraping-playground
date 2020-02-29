import React, { Suspense } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Layout from "antd/lib/layout";

import Fallback from "src/components/Fallback";
import Page from "../Page";

import "antd/lib/layout/style";
import "./style.less";

const App = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Layout className="app">
        <Switch>
          <Route exact path="/" render={props => <Page {...props} />} />
          <Route exact path="/:id" render={props => <Page {...props} />} />
        </Switch>
      </Layout>
    </Suspense>
  );
};

export default withRouter(App);
