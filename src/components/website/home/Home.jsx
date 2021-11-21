import React from "react";
import Feature from "./integrate/Feature";
import Frontpage from "./integrate/Frontpage";
import OurBest from "./integrate/OurBest";

function Home() {
  return (
    <div className="flex flex-col">
      <Frontpage />
      <Feature />
      <OurBest />
    </div>
  );
}

export default Home;
