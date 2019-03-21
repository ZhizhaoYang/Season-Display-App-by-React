import React from "react";

import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Summer! Let's hit the beach",
    iconName: "sun outline"
  },
  winter: {
    text: "It's winter now, chilly!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 3 && month < 10) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth() + 1);
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName} icon massive`} />
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} icon massive`} />
    </div>
  );
};

export default SeasonDisplay;
