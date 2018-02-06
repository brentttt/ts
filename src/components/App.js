import React, { Component } from 'react';

const debounce = require('debounce');

import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';

import Nav from './Nav';
import Intro from './Intro';
import RoastsSection from './RoastsSection';
import ShopSection from './ShopSection';
import Insta from './Insta';
import Footer from './Footer';


// console.log(PropsTypes);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roasts: data.roasts,
      shopItems: data.shop
    }
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  updateUrl = (url) => {
    if(!url) return;
    const { match, location, history } = this.props;
    history.push(url)
  }
  render() {
    return (
      <div className="container"
        onWheel={
          debounce(
          () => {
            let sections = document.getElementsByClassName('page-section');

            for(let i = 0; i < sections.length; i++) {
              let pos = sections[i].getBoundingClientRect();
              if(pos.top + (pos.height * .75) > 0) {
                let clear = document.querySelectorAll('.nav__list__item');
                for(let j = 0; j < clear.length; j++) {
                  clear[j].classList.remove('nav__list__item--active');
                }
                let id = sections[i].getAttribute('id');
                this.updateUrl(id)
                document.getElementById(id + '-link').classList.add('nav__list__item--active');
                return;
              }
            }
          }
        )
        }>
        <Nav updateUrl={this.updateUrl}/>
        <Intro />
        <Insta />
        <RoastsSection roasts = {this.state.roasts}/>
        <ShopSection shopItems = {this.state.shopItems}/>
        <Footer />
      </div>
    )
  }
};

export default withRouter(App);
