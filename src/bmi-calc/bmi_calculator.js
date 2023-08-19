import React, { useEffect, useState } from "react";
import "./bmicalculator.css";
const BMICalculator = (props) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState();
  const [pieDeg, setPieDeg] = useState("45");

  const [pieContent, setPieContent] = useState("");

  const weightHandler = (e) => {
    setWeight(e.target.value);
  };
  const heightHandler = (e) => {
    setHeight(e.target.value);
  };

  const submitHandler = (event) => {
    try{
    event.preventDefault();
    console.log(weight, height);
    let res = weight / ((height * height) / 10000);
    setBMI(res.toFixed(1));

    if (bmi < 25 && pieDeg=="45") {
      setPieContent("You are Underweight");
      setPieDeg("135");
      console.log(bmi, pieDeg);
    } else if (bmi >= 25 && bmi < 30 && pieDeg=="") {
      setPieContent("You are a healthy weight");
      setPieDeg("225");
      console.log(bmi, pieDeg);
    } else {
      setPieContent("You are overweight");
      console.log(bmi, pieDeg);
      setPieDeg("315");
    }

    props.bmiValue(bmi);
    props.bmiCont(pieContent);
    props.bmiDeg(pieDeg);
  }catch(err){
    console.log(err)
  }
  };

  const reloadHandler = () => {
    window.location.reload();
  };
  return (
    <div className="card">
      <div>
        <label>Weight :</label>
        <input name="weight" value={weight} onChange={weightHandler} />
        <small>.Kg</small>
      </div>
      <div>
        <label>Height :</label>
        <input value={height} onChange={heightHandler} name="height" />
        <small>.cm</small>
      </div>
      <div>
        <button className="btn" onClick={submitHandler} type="submit">
          Submit
        </button>
        <button className="btn reload" onClick={reloadHandler} type="submit">
          Reload
        </button>
      </div>
    </div>
  );
};

export default BMICalculator;
