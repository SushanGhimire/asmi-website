import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/website/home/Home";
import Navbar from "./components/website/static/Navbar";
function App() {
  return (
    <div className="bg-white font-dmSans">
      <Navbar />
      <div className="flex-1">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
