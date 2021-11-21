import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/website/home/Home";
function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
