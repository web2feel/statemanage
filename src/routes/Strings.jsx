import React, { useState } from "react";

const Strings = () => {
  const [name, setName] = useState("Jakob");
  return (
    <>
      <div className="page-title">
        <h2>String States</h2>
        <p>Managing string states in React</p>
      </div>

      <div className="box text-center">
        <h1 className="header1 ">
          Hello, <span style={{ color: "orange" }}> {name} </span> Welcome to
          ReactJS!
        </h1>
        <br />

        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="text-control"
          placeholder="Enter new name"
        />
      </div>
    </>
  );
};

export default Strings;
