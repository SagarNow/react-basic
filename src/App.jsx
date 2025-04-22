import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import State from "./components/State";

import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <Navbar />
      {/* <Home/> */}
      <State/>
      <Footer/>
    </div>
  );
};

export default App;
