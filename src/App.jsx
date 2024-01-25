import Home from "./Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route,HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:city" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
