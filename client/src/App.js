import React from 'react';
import Acceuil from './page/Acceuil'; 
import Navbar from './page/Navbar';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './page/contact';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
