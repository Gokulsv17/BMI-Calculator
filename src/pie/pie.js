import React, { useState,useEffect } from "react";
import "./pie.css";

const Pie = (props) => {

  //45 black
  //135 blue\
  //225 green
  // 315 red
  return (
    <div className="pie">
      {/* <div className="pie_chart1" style={{ transform: `rotate(45deg)` }}></div> */}
      {/* <div className="pie_chart2"></div> */}
      <div className="pie_content">
        <h4>{props.bmiCont}</h4>
        <h5>{props.bmiValue}</h5>
      </div>
      {/* <div className="arrow">
        <div className="line"></div>
        <div className="point"></div>
      </div> */}
    </div>
  );
};

export default Pie;
