import React, { Component } from 'react';

import RoastContainer from './RoastContainer';
import RoastView from './RoastView';

export default class RoastsSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRoast: null
    }
  }
  handleViewRoast = (roastToView, element) => {
    const pos = element.getBoundingClientRect();
    this.setState(() => ({
      currentRoast: {
        roast: roastToView,
        pos
      }
    }));
  }
  render() {
    return (
      <div className="roasts-section page-section" id="roasts">
        <div className="page-section__wrapper">
          <h1>Roasts</h1>
            <div className="page-section__items-centered">
            {this.props.roasts.map((roast, i) => {
              return (
                <RoastContainer
                  key={i}
                  roast={roast}
                  handleViewRoast={this.handleViewRoast}/>
              )
            })}
            </div>
          </div>
          {this.state.currentRoast ?
            <RoastView currentRoast={this.state.currentRoast}/> :
            null}
      </div>
    );
  }
};
