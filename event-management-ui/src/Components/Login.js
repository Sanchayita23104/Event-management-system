import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="login-page">
      <div className="login-image">
        {/* Replace the src attribute with the URL or path of your image */}
        <img src="https://i.pinimg.com/736x/0a/2a/08/0a2a08765919d956ab7ff5e0037b3d04.jpg" alt="Event" />
      </div>

      <div className="login-container">
        <h2 className="login-title">Log in</h2>
        <form className="login-form" onSubmit={handleLogin}>
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
          <button type="submit" className="login-button">Log in</button>
        </form>
        
        <div className="separator">
          <span>or</span>
        </div>

        <button className="alt-login-button">Email me a login link</button>
        <button className="alt-login-button google-login">
          <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
        </button>

        <div className="other-login-methods">
          <p>Other login methods</p>
          <FontAwesomeIcon icon={faFacebook} className="social-icon facebook" />
          <FontAwesomeIcon icon={faApple} className="social-icon apple" />
        </div>
      </div>
    </div>
  );
};

export default Login;
