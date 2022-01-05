import logo from "./logo.svg";
import "./App.css";
import Login from './Login/index.js'
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    
    <Router>
      <div className="App">
      <Navbar></Navbar>
        <Routes>
        <Route path='/login' element={<Login/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
