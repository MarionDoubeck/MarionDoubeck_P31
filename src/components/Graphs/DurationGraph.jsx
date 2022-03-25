import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer} from 'recharts';
import CustomToolTip from './CustomTooltip';

const DurationGraph = (props) => {
  const {data} = props;
  const semaine = ["L", "M", "M", "J", "V", "S", "D"]
  for (let i=0; i<data.sessions.length; i++){
    data.sessions[i].dayLetter = semaine[i];
  }
/* 
  const CustomToolTip = ({ active, payload }) => {
    console.log (active,payload)
    if (!active || !tooltip)    return null
    for (const bar of payload)
        if (bar.dataKey === tooltip)
            return <div>{ bar.name }<br/>{ bar.value.toFixed(2) }</div> 
    return null
}
*/
  return (
    <ResponsiveContainer id="duration">
      <LineChart  width="100%" height="100%" data={data.sessions}>
        <Tooltip 
          cursor={ {stroke: 'green', strokeWidth: 1} } 
          contentStyle={{width: '20px', height: '7px'}} 
          content={<CustomToolTip />}
        />
        <XAxis dataKey="dayLetter" stroke='rgba(255, 255, 255, 0.5)' strokeWidth={0} fontSize={16}/>
        <Line id="durationLine" type="monotone" dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.5)" dot={false} strokeWidth={2}/>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DurationGraph;