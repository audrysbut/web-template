import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function One() {
  return <div>Comp1</div>;
}

function Two() {
  return <div>Comp2</div>;
}

function App() {
  return (
    <Router basename="/">
      <div>
        <div>Pages: </div>
        <Switch>
          <Route exact path="/">
            <One />
          </Route>
          <Route path="/two">
            <Two />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
