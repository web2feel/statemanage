import React, { useState } from "react";

const Object = () => {

  const initUser = {
    username: "John Doe",
    age: 25,
    location: "London",
  };
  const [user, setUser] = useState(initUser);

  const [location, setLocation] = useState("");


  const handleUser = () => {
    setUser((prev) =>({...prev, location:location }) )
    setLocation("")
  }
  return (
    <>
      <div className="page-title">
        <h2>Object States</h2>
        <p>Managing object states in React</p>
      </div>
      <div className="box">
        <h3 className="header3 box">{`I am ${user.username}, aged ${user.age} from ${user.location}.`}</h3>

        <div>
          <p>
            Change user location to the input value when update button is
            clicked
          </p>
          <br />
          <p>
            <input
              type="text"
              className="text-control"
              placeholder="Enter new location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </p>
          <br />
          <button onClick={handleUser} className="btn">Update</button>
        </div>
      </div>
    </>
  );
};

export default Object;
