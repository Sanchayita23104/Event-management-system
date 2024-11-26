import React from 'react';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import EventList from './Components/EventList';
import RegistrationForm from './Components/RegistrationForm';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<Login />} /> {/* New Login route */}
          <Route path="/signup" element={<Signup />} /> {/* New Signup route */}
        </Routes>
      </main>
      <Footer /> {/* Add Footer here */}
    </Router>
  );
}

export default App;

