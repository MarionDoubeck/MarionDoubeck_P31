import React from 'react';
import Bike from '../assets/icons/bike.svg';
import Gym from '../assets/icons/gym.svg';
import Meditation from '../assets/icons/meditation.svg';
import Swimming from '../assets/icons/swimming.svg';

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="icons">
        <div className="icon"><img src={Meditation} alt="meditation" /></div>
        <div className="icon"><img src={Swimming} alt="swimming" /></div>
        <div className="icon"><img src={Bike} alt="bike" /></div>
        <div className="icon"><img src={Gym} alt="gym" /></div>
      </div>
      <div className="copyright">Copyright, SportSee 2020</div>
    </div>
  );
};

export default LeftBar;