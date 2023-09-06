import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header style={{ backgroundColor: 'black', color: 'white', padding: '10px',marginRight:'1.5em', borderEndEndRadius: '0.6em' }}>
      {/* <h1>My Website</h1>
      <p>123 Main St, Anytown, USA</p> */}
      <div>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginRight: '10px' }}>
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginRight: '10px' }}>
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <FaInstagram />
        </a>
      </div>
    </header>
  );
};

export default Header;