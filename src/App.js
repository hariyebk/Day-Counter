import "./styles.css";
import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [state, setState] = useState(1);
  const [count, setCount] = useState(0);
  const [ischanged, setIschanged] = useState(false);
  const handleCountMinus = () => {
    setCount((c) => c - 1);
    setIschanged((is) => true);
  };
  const handleCountPlus = () => {
    if (count < 9) {
      setCount((c) => c + 1);
      setIschanged((is) => true);
    }
  };
  const handleStateMinus = () => {
    if (state > 1) {
      setState((s) => s - 1);
      setIschanged((is) => true);
    }
  };
  const handleStatePlus = () => {
    if (state < 9) {
      setState((s) => s + 1);
      setIschanged((is) => true);
    }
  };
  return (
    <div>
      <div className="counter">
        <button
          className="counter__button counter__button--minus"
          onClick={handleStateMinus}
        >
          {" "}
          -{" "}
        </button>
        <span style={{ fontSize: "25px" }}> state : {state} </span>
        <button
          className="counter__button counter__button--plus"
          onClick={handleStatePlus}
        >
          {" "}
          +{" "}
        </button>
      </div>
      <div className="counter">
        <button
          className="counter__button counter__button--minus"
          onClick={handleCountMinus}
        >
          {" "}
          -{" "}
        </button>
        <span style={{ fontSize: "25px" }}> count: {count * state} </span>
        <button
          className="counter__button counter__button--plus"
          onClick={handleCountPlus}
        >
          {" "}
          +{" "}
        </button>
      </div>
      <div className="date">
        {count === 0 ? (
          <span> Today is &nbsp; </span>
        ) : count < 1 ? (
          <span>
            {" "}
            {Math.abs(`${count * state}`)} days ago from today was &nbsp;{" "}
          </span>
        ) : (
          <span> {count * state} days from today is &nbsp; </span>
        )}
        {ischanged ? (
          <span>
            {" "}
            {new Date(
              new Date().getTime() + `${count * state}` * 24 * 60 * 60 * 1000
            ).toDateString()}{" "}
          </span>
        ) : (
          <span> {new Date().toDateString()} </span>
        )}
      </div>
    </div>
  );
}
