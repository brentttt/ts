import React from 'react';
import {withRouter} from "react-router-dom";

const debounce = require('debounce');

const Nav = (props) => {
  addEventListener('scroll', debounce(() => {
    let sections = document.getElementsByClassName('page-section');

    for(let i = 0; i < sections.length; i++) {
      let pos = sections[i].getBoundingClientRect();
      if(pos.top + (pos.height * .75) > 0) {
        let clear = document.querySelectorAll('.nav__list__item');
        for(let j = 0; j < clear.length; j++) {
          clear[j].classList.remove('nav__list__item--active');
        }
        let id = sections[i].getAttribute('id');
        // window.location.pathname = id;
        this.props.history.push("/some/testpath");
        document.getElementById(id + '-link').classList.add('nav__list__item--active');
        return;
      }
    }
  }));
  return(
    <div className="nav">
      <ul className="nav__list">
        <li id="info-link" className="nav__list__item nav__list__item--active">Info</li>
        <li id="roasts-link" className="nav__list__item">Roasts</li>
        <li id="shop-link" className="nav__list__item">Shop</li>
      </ul>
    </div>
  );
};

export default Nav;
