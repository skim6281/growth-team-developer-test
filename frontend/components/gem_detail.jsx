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
    console.log("gem: "+gem);
    if(gem) {
      return (
        <content>
          <div className="gem-name">
            { gem.name }
          </div>
          <div className="gem-info">
            { gem.info }
          </div>
          <div>
            {this.renderDependencies(gem.dependencies)}
          </div>
        </content>
      )
    } else {
      return(
        <content>
          <div>
            No gem found
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
