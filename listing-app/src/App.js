import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ProtectedRoute from './ProtectedRoute';
import NavBar from './NavBar';
import { useState } from 'react';
function App() {
  const [viewMode, setViewMode] = useState(true);
  return (
    <Router>
      <NavBar viewMode={viewMode} setViewMode={setViewMode}/>
      <Routes>
        <Route path = {'/login'} element ={<Login/>}/>
        <Route path = {'/signup'} element ={<SignUp/>}/>
        <Route path = {'/'} element ={<ProtectedRoute><Home viewMode={viewMode}/></ProtectedRoute>}/>
      </Routes>
    </Router>
  );
}

export default App;
