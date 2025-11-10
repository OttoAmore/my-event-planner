import React, { useState } from 'react';

const Header = () => {
  // State to track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // State to track the user's name
  const [name, setName] = useState('');

  // Function to toggle login/logout
  const toggleLogin = () => {
    if (!isLoggedIn && name.trim() === '') {
      alert('Please enter your name to login');
      return;
    }
    setIsLoggedIn(!isLoggedIn);
    if (isLoggedIn) {
      setName(''); // Clear name on logout
    }
  };

  // Styles (optional, beginner-friendly)
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ddd',
  };

  const inputStyle = {
    padding: '5px',
    fontSize: '16px',
    marginRight: '10px',
  };

  const buttonStyle = {
    padding: '5px 10px',
    fontSize: '16px',
  };

  return (
    <header style={headerStyle}>
      <h2>My Event Planner</h2>

      <div>
        {/* Show input only if not logged in */}
        {!isLoggedIn && (
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
        )}

        {/* Login / Logout button */}
        <button style={buttonStyle} onClick={toggleLogin}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    </header>
  );
};

export default Header;


