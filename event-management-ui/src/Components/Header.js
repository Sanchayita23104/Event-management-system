import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  const [eventSearch, setEventSearch] = useState('');
  const [locationSearch, setLocationSearch] = useState('');

  const handleEventSearchChange = (e) => {
    setEventSearch(e.target.value);
  };

  const handleLocationSearchChange = (e) => {
    setLocationSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', eventSearch, locationSearch);
  };

  return (
    <>
      <header className="header">
        <div className="logo">EventAura</div>

        <form className="search-bar" onSubmit={handleSearchSubmit}>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search events"
              value={eventSearch}
              onChange={handleEventSearchChange}
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>

          <div className="search-container">
            <input
              type="text"
              placeholder="Choose location"
              value={locationSearch}
              onChange={handleLocationSearchChange}
            />
             <FontAwesomeIcon icon={faMapMarker} className="location-icon" />
          </div>
        </form>

        <nav className="nav-links">
        <Link to="/">Home</Link> {/* Home link */}
        <Link to="/events">Tickets</Link> {/* EventList link */}
        <Link to="/register">Register</Link> {/* RegistrationForm link */}
        <Link to="/login">Login</Link> {/* New Login link */}
          <Link to="/signup">Signup</Link> {/* New Signup link */}
        </nav>
      </header>
    </>
  );
};

export default Header;