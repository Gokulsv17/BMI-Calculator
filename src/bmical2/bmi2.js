import React, { useState } from "react";
import "./bmi2.css";
const BMI2 = (props) => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calBmi = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("please enter value");
    } else {
      let bmi = weight / ((height * height) / 10000);
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("you are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("you are healthy weight");
      } else {
        setMessage("you are over weight");
      }
    }

    console.log(bmi, message);
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>height</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className="btn" type="submit">
              submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              reload
            </button>
          </div>
        </form>

      {bmi!="" &&  <div className="center">
          <h3>your BMI is:{bmi}</h3>
          <p>{message}</p>
        </div>}
      </div>
    </div>
  );
};

export default BMI2;
