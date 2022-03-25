import React from "react"
import { PropTypes } from "prop-types"

const CustomToolTip = ({ active, payload }) => {
  if (active && payload.length)  {
    return (
      <div className="tooltip">
        {payload[0].value} min
      </div>
    )
  }  
  return null
}

CustomToolTip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
}

export default CustomToolTip