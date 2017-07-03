import React from 'react';
import { connect } from 'react-redux';

class GemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.renderDependencies = this.renderDependencies.bind(this);
  }

  renderDependencies(gems) {
    if(gems.length === 0) {
      return (None);
    }
    return (
      <ul>
        {gems.map((gem,index) => <li key={index}>{gem.name}</li>)}
      </ul>
    )
  }

  render() {
    const { gem } = this.props;
    if(gem) {
      return (
        <content>
          <div className="gem-name">
            { gem.name }
          </div>
          <div className="gem-info">
            <h2>INFORMATION</h2>
            { gem.info }
          </div>
          <div>
            <h2>DEPENDENCIES</h2>
            {this.renderDependencies(gem.dependencies)}
          </div>
        </content>
      )
    } else {
      return(
        <content>
          <div>
          </div>
        </content>
      )
    }
  }
}

const mapStateToProps = state => {
  return ({
    gem: state.gem
  });
};

export default connect(
  mapStateToProps
)(GemDetail);
