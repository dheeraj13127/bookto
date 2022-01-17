import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
import Landing from "./components/Landing/Landing";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Landing />} />
          <Route path='/dashboard' exact element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
