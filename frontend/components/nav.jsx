import React from 'react';

const Nav = props => {
  return (
    <section className="nav-container">
      <div className="map-container">
        <img src={window.images.map} />
        <div className="logo-container">
          <img src={window.images.logo} />
        </div>
        <ul>
          <li>Search</li>
          <li>Favorites</li>
        </ul>
      </div>
    </section>
  )
}

export default Nav;
