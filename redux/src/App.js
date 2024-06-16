import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav/nav';
import GetToken from './components/block-chain-try/getToken';
import Login from './components/auth/login'
// 0xdAC17F958D2ee523a2206206994597C13D831ec7
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/getToken" element={<GetToken />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
