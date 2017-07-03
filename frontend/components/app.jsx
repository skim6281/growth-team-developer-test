import React from 'react';
import Nav from './nav';

class App extends React.Component {
  render(){
    return (
      <main className="app-container">
        <Nav/>
        <content className="content">
          {this.props.children}
        </content>
      </main>
    )
  }
}

export default App;
