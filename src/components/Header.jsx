import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // We'll style this next

function Header() {
  return (
    <header className="scrapbook-header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/story">I love you</Link></li>
          <li><Link to="/memories">Memories</Link></li>
          <li><Link to="/playlist">Playlist</Link></li>
          <li><Link to="/compliments">Compliments</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
