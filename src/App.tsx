import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import SortingTest from './pages/SortingTest';
import Spells from './pages/Spells';
import Potions from './pages/Potions';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sorting" element={<SortingTest />} />
          <Route path="/spells" element={
            <ProtectedRoute requireHouse={true}>
              <Spells />
            </ProtectedRoute>
          } />
          <Route path="/potions" element={
            <ProtectedRoute requireHouse={true}>
              <Potions />
            </ProtectedRoute>
          } />

        </Routes>
        <Toaster 
          position="top-right" 
          toastOptions={{
            style: {
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white'
            }
          }}
        />
      </div>
    </Router>
  );
}

export default App;
