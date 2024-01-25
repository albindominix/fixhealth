import Home from "./Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route,HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:city" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
