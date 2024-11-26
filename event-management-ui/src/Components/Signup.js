import React, { useState } from 'react';
import './Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('Signing up with:', email, password);
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-image">
        {/* Replace the src attribute with the URL or path of your image */}
        <img src="https://i.pinimg.com/1200x/ee/15/26/ee1526130e0caba829dfa7d8282eb25b.jpg" alt="Event" />
      </div>

      <div className="signup-container">
        <h2 className="signup-title">Sign up</h2>
        <form className="signup-form" onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="signup-button">Sign up</button>
        </form>

        <div className="separator">
          <span>or</span>
        </div>

        <button className="alt-signup-button google-signup">
          <FontAwesomeIcon icon={faGoogle} /> Sign up with Google
        </button>

        <div className="other-signup-methods">
          <p>Other signup methods</p>
          <FontAwesomeIcon icon={faFacebook} className="social-icon facebook" />
          <FontAwesomeIcon icon={faApple} className="social-icon apple" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
