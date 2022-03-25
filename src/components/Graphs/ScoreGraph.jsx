import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, Legend, PolarAngleAxis, clockWise  } from 'recharts';

const ScoreGraph = (props) => {
  const {data} = props;
  const score = [
    {name: 100 * data.todayScore+"%", todayScore: data.todayScore, fill: "red"}
  ]
  return (
    <ResponsiveContainer id="score">
      <RadialBarChart 
        cx="50%"
        cy="50%" 
        innerRadius="80%"
        outerRadius={120} 
        barSize={10} 
        data={score} 
        width={100} 
        height={100} 
        startAngle={450} 
        endAngle={90}  >
        <PolarAngleAxis type="number" domain={[0,1]} tick={false} angleAxisId={0}/>
        <RadialBar
          minAngle={0}
          dataKey="todayScore"
          cornerRadius={10}
          angleAxisId={0}
          clockWise
        />
        
        <Legend formatter={(value)=> {return (<div className="scoreLegend">{value}<div>de votre objectif</div></div>);}} iconSize={0} verticalAlign="middle" align="center"/>
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default ScoreGraph;