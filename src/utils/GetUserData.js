import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingPage from '../pages/LoadingPage';

const GetUserData = (props) => {
  const memberId=props.memberId;
  const need=props.need;
  const [isLoading, setLoader] = useState(true);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getData()
    setLoader(false)
  },[])
  const getData = () => {
    axios
    .get('http://localhost:3000/user/'+memberId)
    .then((res) => setUserData(res.data))
    .catch(err => console.log(err))
  }
  
  if( (!isLoading) && (userData["data"]!== undefined)){
    let data="";
    switch (need){
      case "userLastName" : data = userData["data"]["userInfos"]["lastName"];break;
      case "userFirstName" : data = userData["data"]["userInfos"]["firstName"];break;
      case "userAge" : data = userData["data"]["userInfos"]["age"];break;
      case "userScore" : data = 100 * userData["data"]["todayScore"];break;
      case "userCal" : data = userData["data"]["keyData"]["calorieCount"];break;
      case "userProt" : data = userData["data"]["keyData"]["proteinCount"];break;
      case "userSugar" : data = userData["data"]["keyData"]["carbohydrateCount"];break;
      case "userLipid" : data = userData["data"]["keyData"]["lipidCount"];break;
      default : console.log("data not found");
    }
    return (
      <>
        {data}
      </>
      );
  }else{
    return(
      <div><LoadingPage /></div>
    )
  };
};

export default GetUserData;