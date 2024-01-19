import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './component/home';
import LoginPage from './component/auth';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
