import React, { Component } from 'react';

export default class ShopSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // shopItems: this.props.shopItems
    };
  }
  render() {
    return (
      <div className="shop-section page-section">
        <h1>Shop</h1>
      </div>
    );
  }
};
