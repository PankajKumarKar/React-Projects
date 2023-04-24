import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  //Increment
  function incrementHandler() {
    setCount(count + 1);
  }

  //Decrement
  function decrementHandler() {
    setCount(count - 1);
  }

  //Reset
  function resetHandler() {
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[#414141] gap-10 text-white">
      <h2 className="text-5xl ">Counter App</h2>

      <div className="bg-white w-70 h-15 rounded-md text-black items-center flex flex-row p-3 text-[28px] justify-between">
        <div className="border-r-2 px-4 border-black">
          <button onClick={decrementHandler}>-</button>
        </div>

        <div className="px-4 text-red-500">{count}</div>

        <div className="border-l-2 px-4 border-black">
          <button onClick={incrementHandler}>+</button>
        </div>
      </div>

      <button
        className="bg-black rounded-md text-3xl py-1 px-3 hover:bg-red-950"
        onClick={resetHandler}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
