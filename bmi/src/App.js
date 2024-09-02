import React, { useState } from "react";
import "./App.css";

// handleclicked();{
//   const a = height;
//   const b = weight;
//   const c = height + weight;
// }

function App() {
  const [weight, setweight] = useState(0);
  const [height, setHight] = useState(0);
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState("");

  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Enter valid Height and wight");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));
    }

    if (bmi < 25) {
      setMessage("you are underweight");
    } else if (bmi >= 25 && bmi < 30) {
      setMessage("You are Healthy");
    } else {
      setMessage("You are Overweight");
    }
  }

  let relod = () => {
     window.location.reload()
  }

  return (
    <div className="App">
      <h1>BMI CALCULATOR</h1>
      <div className="height-weight" >
        <form onSubmit={calcBmi}>
          <h3>
            Enter Height(ibs) :{" "}
            <input
              type="number"
              value={height}
              onChange={(event) => setHight(event.target.value)}
              id=""
              placeholder="Height"
            />
          </h3>
          <h3>
            Enter Weight(in) :{" "}
            <input
              type="number"
              value={weight}
              onChange={(e) => setweight(e.target.value)}
              id=""
              placeholder="Weight"
            />
          </h3>
          <button className="submit" type="submit">
            SUBMIT
          </button>
          <br />
          
        </form>
        <button className="relod" onclick={relod}>
            RELOD
          </button>
        <div>

          <h4>Your BMI is : {bmi} </h4>
          <h5>{message}</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
