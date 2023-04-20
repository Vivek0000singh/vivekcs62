import React from "react";

import { About, Footer, Work, Header, Skills } from "./container";
import { Navbar } from "./components";
import { CVbutton } from "./components";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <CVbutton />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
