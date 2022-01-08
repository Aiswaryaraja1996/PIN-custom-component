import "./App.css";
import Pininput from "./pin/Pininput";
import { useState } from "react";

export default function App() {
  var [num, setNum] = useState(null);

  const onChange = (val) => {
    setNum(val);
  };

  return (
    <div className="App">
      <h1>Custom PIN Component</h1>
      <Pininput onChange={onChange} />
      <h4>{num}</h4>
    </div>
  );
}
