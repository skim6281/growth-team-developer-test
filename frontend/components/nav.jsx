import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
  return (
    <aside className="nav-container">
      <div className="map-container">
        <img src={window.images.map} />
        <div className="logo-container">
          <img src={window.images.logo} />
        </div>
        <ul>
          <li><Link className="link" to="/" >Search</Link></li>
          <li><Link className="link" to="/favorites">Favorites</Link></li>
        </ul>
      </div>
    </aside>
  )
}

export default Nav;
