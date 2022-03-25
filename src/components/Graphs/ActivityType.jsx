import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const ActivityType = (props) => {
  const {data} = props;
  data.data[0].type="Cardio";
  data.data[1].type="Energie";
  data.data[2].type="Endurance";
  data.data[3].type="Force";
  data.data[4].type="Vitesse";
  data.data[5].type="Intensité";
  let dataNewOrder=[];
  let lgt = data.data.length;
  for (let i=0; i<lgt; i++){
    dataNewOrder[i]=data.data[lgt-i-1];
  }
  return (
    <ResponsiveContainer id="activityTypes">
      <RadarChart cx="50%" cy="50%" fill="white" outerRadius="70%" data={dataNewOrder}>
          <PolarGrid />
          <PolarAngleAxis dataKey="type"/>
          <Radar name="Activity Types" dataKey="value"  fill="red" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default ActivityType;