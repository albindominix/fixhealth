import Home from "./pages/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route,HashRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/:city" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path='*'element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
