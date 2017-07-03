import React from 'react';
import { connect } from 'react-redux';

class GemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.renderDependencies = this.renderDependencies.bind(this);
  }

  renderGem(name) {
    return (
        <div className="gem-link">
          <a href={`https://rubygems.org/gems/${name}`} target="_blank">{name}</a>
          <img className="star" src={window.images.starGray}/>
        </div>
    )
  }

  renderDependencies(gems) {
    if(gems.length === 0) {
      return (<span>None</span>);
    }
    return (
      <ul>
        {gems.map((gem,index) => <li key={index}>{this.renderGem(gem.name)}</li>)}
      </ul>
    )
  }

  render() {
    const { gem } = this.props;
    if(gem) {
      return (
        <content>
          <div className="gem-name">
            { this.renderGem(gem.name) }
          </div>
          <div className="gem-info">
            <div className="heading">INFORMATION</div>
            <span>{ gem.info }</span>
          </div>
          <div>
            <div className="heading">DEPENDENCIES</div>
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
