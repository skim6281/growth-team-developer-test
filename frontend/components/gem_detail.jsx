import React from 'react';
import { connect } from 'react-redux';
import { fetchFavorites } from '../action';
import Gem from './gem';

class GemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.renderDependencies = this.renderDependencies.bind(this);
  }

  componentDidMount() {
    this.props.fetchFavorites();
  }

  renderDependencies(gems) {
    if(gems.length === 0) {
      return (<span>None</span>);
    }
    return (
      <ul>
        {gems.map((gem,index) => <li key={index}><Gem name={gem.name} search={true}/></li>)}
      </ul>
    )
  }

  render() {
    const { gem,error } = this.props;
    if(gem) {
      return (
        <section className="gem-detail-container">
          <div className="gem-name">
            <Gem name={gem.name} search={true}/>
          </div>
          <div className="gem-info">
            <div className="heading">INFORMATION</div>
            <span>{ gem.info }</span>
          </div>
          <div>
            <div className="heading">DEPENDENCIES</div>
            {this.renderDependencies(gem.dependencies)}
          </div>
        </section>
      );
    } else if(error){
      return (<section className="error">{ error }</section>);
    } else {
        return (<section></section>);
    }
  }
}

const mapStateToProps = state => {
  return ({
    gem: state.gem.gem,
    error: state.gem.error
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchFavorites: () => dispatch(fetchFavorites())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GemDetail);
