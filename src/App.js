import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ELogin from './Pages/ELogin';
import ESignUp from './Pages/ESignUp';
import Home from './Pages/Home';
import ALogin from './Pages/ALogin';
import Admin from './Pages/Admin';
import Employee from './Pages/Employee';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // State to track the current page

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <ELogin setCurrentPage={setCurrentPage} />;
      case 'signup':
        return <ESignUp setCurrentPage={setCurrentPage} />;
      case 'alogin':
        return <ALogin setCurrentPage={setCurrentPage} />;
      case 'admin':
        return <Admin />;
        case 'employee':
          return <Employee /> ;
      default:
        return <Home setCurrentPage={setCurrentPage} />; // Pass the setter to Home
    }
  };

  return (
    <Router>
      <div className="App">
        {renderPage()} {/* Render the current page based on the state */}
      </div>
    </Router>
  );
}

export default App;
