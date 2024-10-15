import React, { useState, useEffect } from "react";

export default function BMI() {
  const [height, setHeight] = useState(""); // State for height
  const [weight, setWeight] = useState(""); // State for weight
  const [percentage, setPercentage] = useState(0); // State for triangle position

  // Function to calculate BMI and update the triangle position
  const calculateBMI = () => {
    if (weight && height) {
      // Calculate BMI
      const bmi = weight / (height / 100) ** 2;

      let percentage;

      // Calculate percentage based on BMI value
      if (bmi > 13.5 && bmi < 18.5) {
        percentage = 7 + ((bmi - 13.5) * 16) / 5;
      } else if (
        (bmi > 25 && bmi < 30) ||
        (bmi >= 30 && bmi < 35) ||
        (bmi >= 35 && bmi < 40)
      ) {
        percentage = 40 + ((bmi - 24.5) * 16) / 5;
      } else if (bmi >= 18.5 && bmi < 25) {
        percentage = 23 + ((bmi - 18.5) * 16) / 7;
      }

      // Update percentage state
      if (percentage > 6 && percentage < 88) {
        setPercentage(percentage);
      }
    }
  };

  // Event handlers for input changes
  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  // useEffect to calculate BMI when weight or height changes
  useEffect(() => {
    calculateBMI();
  }, [weight, height]);

  return (
    <>
      {/* BMI Calculator section start */}
      <div className="bmi-container">
        <div className="calculate-container">
          {/* BMI Calculator heading */}
          <h1>BMI Calculator</h1>
          {/* Description text about the BMI Calculator */}
          <p>
            Contrary to popular belief, Lorem ipsum is not simply random text.
            It has roots a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. <br />
            <br />
            Contrary to popular belief, Lorem ipsum is not simply random text.
            It has roots a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          {/* Input field for height with unit "cm" */}
          <input
            id="height"
            type="text"
            placeholder="Your Height"
            value={height}
            onChange={handleHeightChange}
          />
          <span style={{ marginRight: "0.43rem" }}>cm</span>
          {/* Input field for weight with unit "kg" */}
          <input
            id="weight"
            type="text"
            placeholder="Your Weight"
            value={weight}
            onChange={handleWeightChange}
          />
          <span>kg</span>
        </div>
        {/* Container for displaying the BMI result */}
        <div className="img-container">
          {/* Title for BMI result section */}
          <h4>Your BMI</h4>
          {/* Image representing BMI index */}
          <img src="img/bmi-index.jpg" alt="BMI Index" />
          {/* Triangle shape to indicate BMI on the index */}
          <div className="triangle" style={{ left: `${percentage}%` }} />
        </div>
      </div>
      {/* BMI Calculator section end */}
    </>
  );
}
