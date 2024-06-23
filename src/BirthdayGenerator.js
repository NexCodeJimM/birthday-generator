import React, { useState } from "react";
import ReactSlider from "react-slider";
import "./BirthdateGenerator.css";

const BirthdateGenerator = () => {
  const [numberOfBirthdates, setNumberOfBirthdates] = useState(0);
  const [ageRange, setAgeRange] = useState([19, 23]);
  const [birthdates, setBirthdates] = useState([]);
  const [showOutput, setShowOutput] = useState(false);

  const generateBirthdates = () => {
    const birthdateList = [];
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - ageRange[1];
    const maxYear = currentYear - ageRange[0];
    const start = new Date(`${minYear}-01-01`);
    const end = new Date(`${maxYear}-12-31`);
    for (let i = 0; i < numberOfBirthdates; i++) {
      const birthdate = new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
      const formattedDate = `${String(birthdate.getMonth() + 1).padStart(
        2,
        "0"
      )}/${String(birthdate.getDate()).padStart(
        2,
        "0"
      )}/${birthdate.getFullYear()}`;
      birthdateList.push(formattedDate);
    }
    setBirthdates(birthdateList);
    setShowOutput(true);
  };

  const copyToClipboard = () => {
    const textToCopy = birthdates.join("\n");
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Copied to clipboard!");
    });
  };

  return (
    <div className="birthdate-generator">
      <h2>Birthdate Generator</h2>
      <div className="card">
        <div className="input-group">
          <label>Number of Birthdates: </label>
          <input
            type="number"
            value={numberOfBirthdates}
            onChange={(e) => setNumberOfBirthdates(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>
            Age Range: {ageRange[0]} - {ageRange[1]}
          </label>
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="thumb"
            trackClassName="track"
            min={0}
            max={100}
            value={ageRange}
            onChange={(value) => setAgeRange(value)}
            minDistance={1}
          />
        </div>
        <button onClick={generateBirthdates}>Generate Birthdates</button>
      </div>
      {showOutput && (
        <div className="card output-card">
          <h2>Generated Birthdates</h2>
          <div className="output">
            {birthdates.map((birthdate, index) => (
              <div key={index}>{birthdate}</div>
            ))}
          </div>
          <button onClick={copyToClipboard}>Copy to Clipboard</button>
        </div>
      )}
    </div>
  );
};

export default BirthdateGenerator;
