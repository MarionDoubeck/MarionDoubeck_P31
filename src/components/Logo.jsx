import React from 'react';
import LogoImg from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Logo = (props) => {
  let {memberId} = props;
  return (
    <div>
      <NavLink exact="true" to={`/${memberId}`}>
        <img className="logo" src={LogoImg} alt="logo" />
      </NavLink>
    </div>
  );
};

export default Logo;