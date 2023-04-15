import React, { useState } from "react";
const Boolean = () => {
  const [showBox1, setShowBox1] = useState(true);
  const [showBox2, setShowBox2] = useState(true);

  const handleToggle = () => {
    // setShowBox2(showBox2 === true ? false : true);
    setShowBox2(showBox2 => !showBox2)
  };

  console.log(showBox1);
  return (
    <>
      <div className="page-title">
        <h2>Boolean States</h2>
        <p>Managing boolean states in React</p>
      </div>

      <div className="box">
        {showBox1 && (
          <div className="text">
            Textbox 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quas pariatur explicabo eius, porro numquam dicta. Quidem obcaecati
            perferendis sed tempore hic id, laborum ducimus officiis!
          </div>
        )}
        <button onClick={() => setShowBox1(false)} className="btn">
          Hide
        </button>
      </div>

      <div className="box">
        {showBox2 && (
          <div className="text">
            Textbox 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quas pariatur explicabo eius, porro numquam dicta. Quidem obcaecati
            perferendis sed tempore hic id, laborum ducimus officiis!
          </div>
        )}

        <button onClick={handleToggle} className="btn">
          {showBox2 ? "Hide" : "Show"}
        </button>
      </div>
    </>
  );
};

export default Boolean;
