import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component{
  constructor(props){
    super(props);
  }

  renderTabs() {
    const location = window.location.hash;
    if(location === "#/favorites") {
      return(
        <section>
          <div><Link className="link" to="/" >Search</Link></div>
          <div>Favorites</div>
          <div className="fave-bg bg"></div>
        </section>
      );
    } else {
      return(
        <section>
          <div>Search</div>
          <div className="search-bg bg"></div>
          <div><Link className="link" to="/favorites">Favorites</Link></div>
        </section>
      );
    }
  }

  render() {
    return (
      <aside className="nav-container">
        <div className="map-container">
          <img src={window.images.map} />
          <div className="logo-container">
            <img src={window.images.logo} />
          </div>
            {this.renderTabs()}
        </div>
      </aside>
    );
  }
}

export default Nav;
