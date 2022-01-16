import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import './App.css'
function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' exact element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
