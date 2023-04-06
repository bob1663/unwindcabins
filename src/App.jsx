import React from "react";
import "./App.css";

import { Navbar } from "./components";
import {
  Cabin,
  CatchAll,
  FAQ,
  Footer,
  Hero,
  Inspiration,
  Testimonials,
  WhoWeAre,
} from "./container";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cabin />
      <Inspiration />
      <Testimonials />
      <WhoWeAre />
      <CatchAll />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
