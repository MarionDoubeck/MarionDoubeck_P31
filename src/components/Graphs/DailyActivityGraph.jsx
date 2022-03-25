import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer  } from 'recharts';


const DailyActivityGraph = (props) => {
  const {data} = props;
  console.log(data);
  data.sessions.map(s => {s.day=s.day});
  return (
    <ResponsiveContainer id="dailyActivity">
      <BarChart 
        width="100%" 
        height="100%" 
        verticalAlign="bottom"
        data={data.sessions}
        barSize={7}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis dataKey="calories" orientation='left' yAxisId={0} />
        <YAxis dataKey="kilogram" orientation='right' yAxisId={1} />
        <Tooltip />
        <Legend verticalAlign="top" align="right" iconType="circle" iconSize={8} wrapperStyle={{paddingBottom: "20px"}}/>
        <Bar dataKey="kilogram" fill="black" radius={[10, 10, 0, 0]} yAxisId={1}/>
        <Bar dataKey="calories" fill="red" radius={[10, 10, 0, 0]} yAxisId={0}/>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DailyActivityGraph;