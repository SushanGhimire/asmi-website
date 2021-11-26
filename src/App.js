import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./components/website/about/About";
import Contact from "./components/website/contact/Contact";
import Home from "./components/website/home/Home";
import Footer from "./components/website/static/Footer";
import Navbar from "./components/website/static/Navbar";
function App() {
  return (
    <div className="bg-white font-dmSans">
      <Navbar />
      <div className="flex-1">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact-us" component={Contact} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
