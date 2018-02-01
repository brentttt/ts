import React, { Component } from 'react';

import RoastsSection from './RoastsSection';
import ShopSection from './ShopSection';
import Insta from './Insta';
import Footer from './Footer';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roasts: data.roasts
    }
  }
  render() {
    return (
      <div className="container">
        <Insta />
        <RoastsSection roasts = {this.state.roasts}/>
        <ShopSection />
        <Footer />
      </div>
    )
  }
};
