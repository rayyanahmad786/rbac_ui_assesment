import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Roles from './pages/Roles';
import NotFound from './pages/NotFound';
import './App.css';
import AppProvider from './components/context/AppContext';

function App() {
  return (
    <AppProvider>
    <Router>
      <div className="app">
        {/* Header */}
        <Header />

        <div className="app-body">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="content">
            <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/roles" element={<Roles />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>

    </AppProvider>
  );
}

export default App;

