import  React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import './HeadTextComponent.css'

function HeadTextComponent(props) {

  
// if user email does not equal nothing (?)then render a welcome screen
  return (
   
    <div className="SmallCarouselText">
     <text>{props.text}</text>
    </div>
  );
}

export default HeadTextComponent;
