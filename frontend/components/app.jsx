import React from 'react';
import Nav from './nav';

class App extends React.Component {
  render(){
    return (
      <main className="app-container">
        <aside>
          <Nav/>
        </aside>
        <content>
          {this.props.children}
        </content>
      </main>
    )
  }
}

export default App;
