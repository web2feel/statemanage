import React, { useState } from "react";

const Numbers = () => {
  const [counter1, setCounter1] = useState(10);

  const handleReduce = () => {
    setCounter1((prev) => prev > 0 ? prev - 1 : 0);
  };

  const [counter2, setCounter2] = useState(1);

  const handleIncrease = () => {
    setCounter2((prev) => prev + 1);
  };

  const [counter3, setCounter3] = useState(0);

  return (
    <>
      <div className="page-title">
        <h2>Number States</h2>
        <p>Managing number states in React</p>
      </div>

      <div className="box text-center">
        <div className="header2">Count is - {counter3}</div>
        <button
          onClick={() => setCounter3(25)}
          className="btn btn-primary btn-large"
        >
          Set count as 25
        </button>
      </div>

      <div className="box text-center">
        <div className="header2">Count is - {counter2}</div>
        <button onClick={handleIncrease} className="btn btn-primary btn-large">
          Increase Count by 1
        </button>
      </div>
      <div className="box text-center">
        <div className="header2">Count is - {counter1}</div>
        <button
          // disabled={counter1 < 1}
          onClick={handleReduce}
          className="btn btn-primary btn-large"
        >
          Reduce Count by 1
        </button>
      </div>
    </>
  );
};

export default Numbers;
