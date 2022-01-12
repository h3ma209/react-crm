import logo from "./logo.svg";
import "./App.css";
import Login from "./Login/index.js";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard/Index";
import Customers from "./Customers/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken))
}

function getToken() {
  const tokenString = sessionStorage.getItem('token')
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
