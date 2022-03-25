import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Communaute from './pages/Communaute';
import Reglage from './pages/Reglage';

const App = (props) => {
  let memberId=0;
  if (props[0] === undefined){
    let myUrl = window.location.href;
    memberId = myUrl.split("/")[3].split("#")[0];//parfois un # se rajoute à la fin de l'adresse en tappant entrer
  }else{
    ({memberId} = props);
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact="true" path={"/"+memberId} element={<Home memberId={memberId}/>} />
          <Route exact="true" path={"/"+memberId+"/profil"} element={<Profil memberId={memberId}/>}/> 
          <Route exact="true" path={"/"+memberId+"/reglage"} element={<Reglage memberId={memberId}/>}/> 
          <Route exact="true" path={"/"+memberId+"/communaute"} element={<Communaute memberId={memberId}/>}/> 
        </Routes>
      </BrowserRouter>  
    </>
  );
};

export default App;