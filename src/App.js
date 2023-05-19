import React from "react";
import "./styles.css";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function App() {
  return (
    <div class="dropdown">
      <div class="content">
        <Select options={options} />
      </div>
    </div>
  );
}

export default App;
