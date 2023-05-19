import React from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

// const App = () => <Select options={options} />;
const styles = {
  myDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
  },
  widthWide: {
    width: "400px",
  },
};
// function App() {
//   return (
//     <div style={styled}>
//       <Select options={options} />
//     </div>
//   );
// }
const App = () => (
  <div style={styles.myDiv}>
    <Select style={styles.widthWide} options={options} />
  </div>
);

export default App;
