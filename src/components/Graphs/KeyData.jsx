import React from 'react';
import Calories from '../../assets/icons/calories.svg';
import Prots from '../../assets/icons/prots.svg';
import Carbs from '../../assets/icons/carbs.svg';
import Fat from '../../assets/icons/fat.svg';

const KeyData = (props) => {
  const {data}=props;
  return (
    <div className="keyData">
      <div className="key cal">
        <div className="img"><img src={Calories} alt="calories" /></div>
        <div className="nb">{(data.calorieCount) / 1000}kCal</div>
        <div className="keyDataType">Calories</div>
      </div>
      <div className="key prots">
        <div className="img"><img src={Prots} alt="proteines" /></div>
        <div className="nb">{data.proteinCount}g</div>
        <div className="keyDataType">Protéines</div>
      </div>
      <div className="key carbs">
        <div className="img"><img src={Carbs} alt="glucides" /></div>
        <div className="nb">{data.carbohydrateCount}g</div>
        <div className="keyDataType">Glucides</div>
      </div>
      <div className="key fat">
        <div className="img"><img src={Fat} alt="lipides" /></div>
        <div className="nb">{data.lipidCount}g</div>
        <div className="keyDataType">Lipides</div>
      </div>
    </div>
  );
};

export default KeyData;