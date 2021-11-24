import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Jokes from "./components/Jokes";
import Facts from "./components/Facts";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route exact path="jokes" element={<Jokes />} />
            <Route exact path="facts" element={<Facts />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
