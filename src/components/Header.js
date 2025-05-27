import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Smart Nation</div>
      <nav className="nav">
        <a href="#">About</a>
        <a href="#">Initiatives</a>
        <a href="#">Apps</a>
        <a href="#">Resources</a>
        <a href="#">Happenings</a>
      </nav>
    </header>
  );
}

export default Header;
