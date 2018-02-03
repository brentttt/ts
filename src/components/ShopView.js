import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

export default class ShopView extends Component {
  constructor(props) {
    super(props);

    this.state={
      currentImage: this.props.currentShopItem.images[0]
    }
  }
  render() {
    // const viewAnimation = keyframes`
    //   0% {
    //     opacity: 0;
    //   } 100% {
    //     opacity: 1;
    //   }`;
    //
    // const View = styled.div`
    //   animation-fill-mode: forwards;
    //   animation-name: ${viewAnimation};
    //   animation-duration: .2s;
    //   animation-iteration-count: 1;
    // `;
    return(
      <div className="shop-view-container">
        <div className="shop-view-wrapper">
          <a href="#">back</a>
          <div className="shop-item-image__wrapper">
            <div className="shop-item-image__thumbs">
              {this.props.currentShopItem.images.map((image, i) => {
                return <div
                  key={image}
                  onClick={function() {
                    this.setState(() => ({
                      currentImage: image
                    }));
                  }.bind(this)}
                  className={"shop-item-image__thumb " + (this.state.currentImage == image ? 'shop-item-image__thumb--active' : ' ')}
                  ><img src={"images/" + image} /></div>
              })}
            </div>
            <img src={"images/" + this.state.currentImage}/>
          </div>
          <h1>{this.props.currentShopItem.title}</h1>
        </div>
      </div>
    );
  }
};
