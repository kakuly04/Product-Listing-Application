import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ProtectedRoute from './ProtectedRoute';
import NavBar from './NavBar';
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path = {'/login'} element ={<Login/>}/>
        <Route path = {'/signup'} element ={<SignUp/>}/>
        <Route path = {'/'} element ={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
