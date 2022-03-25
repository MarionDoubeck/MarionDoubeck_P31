import React from 'react';
import Navigation from '../components/Navigation';
import LeftBar from '../components/LeftBar';
import Logo from '../components/Logo';

const Reglage = (props) => {
  let {memberId} = props;
  return (
    <div className='reglage generalContent'>
      <div className="logo"><Logo memberId={memberId}/></div>
      <div className="navigation"><Navigation memberId={memberId}/></div>
      <div className="leftBar"><LeftBar /></div>
      <div className="content">
        Réglages du membre n° {memberId}
      </div>
    </div>
  );
};

export default Reglage;