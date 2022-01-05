import logo from "./logo.svg";
import "./App.css";
import Login from './Login/index.js'
import Navbar from "./Navbar";
import Dashboard from "./Dashboard/Index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
