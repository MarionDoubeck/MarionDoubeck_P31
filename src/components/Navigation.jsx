import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  let {memberId} = props;
  const pathname=window.location.pathname;
  const [communauteClassName, setCommunauteClassName] = useState("navItem")
  const [homeClassName, setHomeClassName] = useState("navItem")
  const [profilClassName, setProfilClassName] = useState("navItem")
  const [reglageClassName, setReglageClassName] = useState("navItem")
  useEffect(() => {
    switch (pathname){
      case "/"+memberId : setHomeClassName('navItem active'); break;
      case "/"+memberId+"/communaute": setCommunauteClassName('navItem active'); break;
      case "/"+memberId+"/profil" : setProfilClassName('navItem active'); break;
      case "/"+memberId+"/reglage" : setReglageClassName('navItem active'); break;
      default : console.log ('sorry, the path',pathname,'does not exist.');
    };
  },[pathname, memberId]);
  return (
    <div className="navigation">
      <NavLink exact="true" to={`/${memberId}`}>
        <span className={homeClassName}>Accueil</span>
      </NavLink>
      <NavLink exact="true" to={`/${memberId}/profil`}>
        <span className={profilClassName}>Profil</span>
      </NavLink>
      <NavLink exact="true" to={`/${memberId}/reglage`}>
        <span className={reglageClassName}>Réglage</span>
      </NavLink>
      <NavLink exact="true" to={`/${memberId}/communaute`}>
        <span className={communauteClassName}>Communauté</span>
      </NavLink>
    </div>
  );
};

export default Navigation;