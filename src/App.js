import React from "react";
import BirthdateGenerator from "./BirthdayGenerator";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BirthdateGenerator />
      </header>
      <footer className="App-footer">
        <p>
          Created by{" "}
          <a
            href="https://jimmendoza.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jim Mendoza
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
