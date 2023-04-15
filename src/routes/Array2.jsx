import React, { useState } from "react";
import User from "../components/User";

const Array2 = () => {
  const initUsers = [
    {
      id: 1000,
      name: "John Wayne",
      likes: 5,
    },
    {
      id: 1001,
      name: "Matt Damon",
      likes: 2,
    },
    {
      id: 1002,
      name: "Brad Pitt",
      likes: 7,
    },
  ];
  const [users, setUsers] = useState(initUsers);

  let sortedUsers = [...users].sort((a, b) => b.likes - a.likes);

  return (
    <>
      <div className="page-title">
        <h2>Array States - 2</h2>
        <p>Managing array states in React</p>
      </div>

      <div className="box">
        <h3>
          Increase the Like Count of the user by 1 when clicked on the Like
          button
        </h3>
        <ul className="list">
          {users.map((user) => {
            return <User key={user.id} user={user} setUsers={setUsers} />;
          })}
        </ul>
        <h2 className="header2 box text-center">
        <span style={{ color: "orange" }}> {sortedUsers[0].name} </span> is the popular actor with <span style={{ color: "orange" }}> {sortedUsers[0].likes}</span> Likes 
        </h2>
      </div>
    </>
  );
};

export default Array2;
