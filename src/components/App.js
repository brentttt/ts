import React, { Component } from 'react';

import Intro from './Intro';
import RoastsSection from './RoastsSection';
import ShopSection from './ShopSection';
import Insta from './Insta';
import Footer from './Footer';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roasts: data.roasts,
      shopItems: data.shop
    }
  }
  render() {
    return (
      <div className="container">
        <Intro />
        <Insta />
        <RoastsSection roasts = {this.state.roasts}/>
        <ShopSection shopItems = {this.state.shopItems}/>
        <Footer />
      </div>
    )
  }
};
