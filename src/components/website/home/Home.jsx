import React from "react";
import Experience from "./integrate/Experience";
import Partners from "./integrate/Partners";
import Frontpage from "./integrate/Frontpage";
import Hearing from "./integrate/Hearing";
// import Hearing2 from "./integrate/Hearing2";
import Join from "./integrate/Join";
import LatestBlogs from "./integrate/LatestBlogs";
import MultipleProduct from "./integrate/MultipleProduct";
import PowerfulFeature from "./integrate/PowerfulFeature";

function Home() {
  return (
    <div className="flex flex-col">
      <Frontpage />
      <Partners />
      <MultipleProduct />
      <PowerfulFeature />
      <Hearing />
      <Experience />
      {/* <Hearing2 /> */}
      <LatestBlogs />
      <Join />
    </div>
  );
}

export default Home;
