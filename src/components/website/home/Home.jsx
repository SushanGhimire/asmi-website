import React from "react";
import Experience from "./integrate/Experience";
import Feature from "./integrate/Feature";
import Frontpage from "./integrate/Frontpage";
import Hearing from "./integrate/Hearing";
import OurBest from "./integrate/OurBest";
import PowerfulFeature from "./integrate/PowerfulFeature";

function Home() {
  return (
    <div className="flex flex-col">
      <Frontpage />
      <Feature />
      <OurBest />
      <PowerfulFeature />
      <Hearing />
      <Experience />
    </div>
  );
}

export default Home;
