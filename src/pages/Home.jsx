import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import LeftBar from "../components/LeftBar";
import DailyActivityGraph from "../components/Graphs/DailyActivityGraph";
import ScoreGraph from "../components/Graphs/ScoreGraph.jsx";
import ActivityType from "../components/Graphs/ActivityType";
import DurationGraph from "../components/Graphs/DurationGraph";
import KeyData from "../components/Graphs/KeyData"
import loader from "./../assets/loader.svg";
import NotFound from "./NotFound";

import { getUserMainData, getUserActivity, getUserAverageSessions, getUserPerformance } from "../utils/GetUserActivity";
import { formatUserMainData, formatUserActivity, formatUserAverageSessions, formatUserPerformance } from "../utils/formatUserMainData";

/**
 * This component handles user's home page.
 * Data is loaded in this component and is set with {useState} hook.
 * The API call is done in this component and all graphs are rendered from this component.
 * @component
 */
const Home = (props) => {
  let {memberId} = props;
  const userId = memberId;

  //User's  main data
  const [mainData, setMainData] = useState({});
  const [mainDataIsLoaded, setMainDataIsLoaded] = useState(false);
  const [mainDataError, setMainDataError] = useState(false);

  //User's  activity  data
  const [activityData, setActivityData] = useState({});
  const [activityDataIsLoaded, setActivityDataIsLoaded] = useState(false);
  const [activityDataError, setActivityDataError] = useState(false);

  //User's average data
  const [averageData, setAverageData] = useState({});
  const [averageDataIsLoaded, setAverageDataIsLoaded] = useState(false);
  const [averageDataError, setAverageDataError] = useState(false);

  //User's Performance data
  const [performanceData, setPerformanceData] = useState({});
  const [performanceDataIsLoaded, setPerformanceDataIsLoaded] = useState(false);
  const [performanceDataError, setPerformanceDataError] = useState(false);

  useEffect(() => {
    async function getMainData() {
      try {
        const response = await getUserMainData(userId);
        setMainData(new formatUserMainData(response.data.data));
        setMainDataIsLoaded(true);
      } catch (error) {
        setMainDataError(true);
        console.log("Error:", error.response.data, "main data");
      }
    }

    async function getActivityData() {
      try {
        const response = await getUserActivity(userId);
        setActivityData(new formatUserActivity(response.data.data));
        setActivityDataIsLoaded(true);
      } catch (error) {
        setActivityDataError(true);
        console.log("Error:", error.response.data, "activity data");
      }
    }

    async function getAverageData() {
      try {
        const response = await getUserAverageSessions(userId);
        setAverageData(new formatUserAverageSessions(response.data.data));
        setAverageDataIsLoaded(true);
      } catch (error) {
        setAverageDataError(true);
        console.log("Error:", error.response.data, "average data");
      }
    }

    async function getPerformance() {
      try {
        const response = await getUserPerformance(userId);
        setPerformanceData(new formatUserPerformance(response.data.data));
        setPerformanceDataIsLoaded(true);
      } catch (error) {
        setPerformanceDataError(true);
        console.log("Error:", error, "performance data");
      }
    }

    getMainData();
    getActivityData();
    getAverageData();
    getPerformance();
  }, [userId]);

  if ((!mainDataIsLoaded || !activityDataIsLoaded || !averageDataIsLoaded || !performanceDataIsLoaded) && (!mainDataError || !averageDataError || !activityDataError || !performanceDataError)) {
    return (
      <div className="loading">
        <img className="loader" src={loader} alt="Loading..." />
      </div>
    );
  }
  if (mainDataError || averageDataError || activityDataError || performanceDataError) return <NotFound />;

  return (
  <div className='home generalContent'>
    <div className="logo"><Logo memberId={memberId}/></div>
    <div className="navigation"><Navigation memberId={memberId}/></div>
    <div className="leftBar"><LeftBar /></div>
    <div className="content">
      <h1>Bonjour <span id="firstName">{mainData.firstName}</span></h1>
      <p>Félicitations ! vous avez explosé vos objectifs hier &#128079;</p>
      <div className="homeGraphs">
          <div className="dailyActivityGraph">
            <DailyActivityGraph data={activityData} />
          </div>
          <div className="otherGraphs">
            <div className="graph">
              <div className="durationColors">
                <div className="durationRight"></div>
              </div>
              <div className="durationGraphContainer">
                <DurationGraph data={averageData} />
              </div>
            </div>
            <div className="graph">
              <ActivityType data={performanceData} />
            </div>
            <div className="graph">
              <span id="scoreTitle">Score</span>
              <ScoreGraph data={mainData} />
            </div>
          </div>
          <div className="keyData">
            <KeyData data={mainData} />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;