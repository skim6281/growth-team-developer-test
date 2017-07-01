import React from 'react';
import { connect } from 'react-redux';

class GemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { gem } = this.props;
    return (
      <content>
        <div className="gem-name">
          { gem.name }
        </div>
        <div>

        </div>

      </content>
    )
  }

}

const mapStateToProps = state => {
  return ({
    gem: state
  });
};

export default connect(
  mapStateToProps
)(GemDetail);
