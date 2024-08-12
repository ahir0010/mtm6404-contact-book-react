import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ContactDetail from './pages/ContactDetail';
import NewContact from './pages/NewContact';
import EditContact from './pages/EditContact';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/new">New Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact/:id" element={<ContactDetail />} />
        <Route path="/new" element={<NewContact />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default App;