import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Brand from "./Components/Brand";
import Error from "./Components/Error";
import SubMenu from "./Components/SubMenu";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/error">
            <Error />
          </Route>
          <Route path="/:id">
            <Brand />
          </Route>
          <Route path="/"><SubMenu /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
