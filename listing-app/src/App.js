import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ProtectedRoute from './ProtectedRoute';
import NavBar from './NavBar';
import { useState } from 'react';
import Cart from './pages/Cart';
import NavBar_Menu from './NavBar_2';

function App() {
  const [viewMode, setViewMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Router>
      <NavBar_Menu viewMode={viewMode} setViewMode={setViewMode} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Routes>
        <Route path = {'/login'} element ={<Login/>}/>
        <Route path = {'/signup'} element ={<SignUp/>}/>
        <Route path = {'/'} element ={<ProtectedRoute><Home viewMode={viewMode} searchQuery={searchQuery}/></ProtectedRoute>}/>
        <Route path = {'/cart'} element ={<ProtectedRoute><Cart viewMode={viewMode}/></ProtectedRoute>}/>
      </Routes>
    </Router>
  );
}

export default App;
