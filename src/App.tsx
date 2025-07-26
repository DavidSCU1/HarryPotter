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
import AdmissionLetter from './pages/AdmissionLetter';
import SchoolIntroduction from './pages/SchoolIntroduction';
import { useHouseTheme } from './hooks/useHouseTheme';

function App() {
  const { currentTheme } = useHouseTheme();
  
  return (
    <Router>
      <div className={`min-h-screen ${currentTheme.gradient} relative overflow-hidden`}>
        {/* 学院主题背景图案 */}
        <div className={`absolute inset-0 ${currentTheme.pattern} opacity-30`}></div>
        <div className="absolute inset-0 house-shimmer opacity-20"></div>
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
          <Route path="/admission-letter" element={
            <ProtectedRoute>
              <AdmissionLetter />
            </ProtectedRoute>
          } />
          <Route path="/school-introduction" element={
            <ProtectedRoute>
              <SchoolIntroduction />
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
