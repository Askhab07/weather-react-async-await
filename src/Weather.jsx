import React from "react";
import Sun from "./assets/sun.png";
import "./Weather.css";

const Weather = ({ poplivok }) => {
  const dayNight = () => {
    if (poplivok.current.is_day) {
        return "day";
    }
    return "night";
  };

  return (
    <div className={`card__weather ${dayNight()}`}>
      <div className="left-card">
        <h2>{poplivok.location.name}</h2>
        <p className="region">{poplivok.location.region}</p>
        <p className="data">{poplivok.location.localtime}</p>
      </div>
      <div>
        <img className="sun" src={Sun} alt="" />
        <p className="temp_c">
          {poplivok.current.temp_c}
          <sup>o</sup>C
        </p>
        <p className="temp_f">
          {poplivok.current.temp_f}
          <sup>o</sup>F
        </p>
      </div>
    </div>
  );
};

export default Weather;
