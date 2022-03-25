import React from 'react';
import Navigation from '../components/Navigation';
import LeftBar from '../components/LeftBar';
import Logo from '../components/Logo';

const Communauté = (props) => {
  let {memberId} = props;
  return (
    <div className='communaute generalContent'>
      <div className="logo"><Logo memberId={memberId}/></div>
      <div className="navigation"><Navigation memberId={memberId}/></div>
      <div className="leftBar"><LeftBar /></div>
      <div className="content">
        Communauté du membre n° {memberId}
      </div>
    </div>
  );
};

export default Communauté;