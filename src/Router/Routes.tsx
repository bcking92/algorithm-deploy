import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../Main';
import SortView from '../Component/Sort/SortView';
import HSort from '../Component/Sort/HeapSort';
import GraphView from '../Component/Graph/GraphView';

function Routes(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/algorithm-deploy/" component={Main} />
        <Route path="/algorithm-deploy/BSort" component={SortView} />
        <Route path="/algorithm-deploy/ISort" component={SortView} />
        <Route path="/algorithm-deploy/SSort" component={SortView} />
        <Route path="/algorithm-deploy/MSort" component={SortView} />
        <Route path="/algorithm-deploy/QSort" component={SortView} />
        <Route path="/algorithm-deploy/HSort" component={HSort} />
        <Route path="/algorithm-deploy/bfs" component={GraphView} />
        <Route path="/algorithm-deploy/dfs" component={GraphView} />
      </Switch>
    </Router>
  );
}
export default Routes;
