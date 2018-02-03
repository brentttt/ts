import React from 'react';
import styled, { keyframes } from 'styled-components';

const RoastView = (props) => {


  const viewAnimation = keyframes`
    0% {
      opacity: 0;
    } 100% {
      opacity: 1;
    }`;

  const View = styled.div`
    animation-fill-mode: forwards;
    animation-name: ${viewAnimation};
    animation-duration: .2s;
    animation-iteration-count: 1;
  `;
  return(
    <View className="roast-view-container">
      <div className="roast-view-wrapper">
        <a href="#">back</a>
        <img />
        <h1>{props.currentRoast.roast.title}</h1>
        <p>{props.currentRoast.roast.origin}</p>
        <p className="desc-label">Notes:</p>
        <div className="taste-notes-container">
          {props.currentRoast.roast.taste.map((note, i) => {
            return <span key={i} className="taste-note">{note}</span>
          })}
        </div>
        <p className="desc-label">Roast level:</p>
        <div className="roast-level">
          <div
            style={{width: props.currentRoast.roast.level + "%"}}
            className="roast-level__bar"></div>
        </div>
      </div>
    </View>
  );
};

export default RoastView;
