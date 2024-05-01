import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let handleIncrement = () => {
    setCount(count + 1);
    if (count >= 30) {
      alert("Count reach it's maximum count value");
      setCount(count);
    }
  };

  let handleDecrement = () => {
    setCount(count - 1);
    if (count <= 0) {
      alert("Count can not be in negative values");
      setCount(count);
    }
  };

  let handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <div className="box">
        <h1>Counter</h1>
        <p>{count}</p>
        <button className="btn" onClick={handleIncrement}>
          Increment
        </button>
        <button className="btn" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
