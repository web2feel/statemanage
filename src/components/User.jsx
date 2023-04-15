import React from "react";

const User = ({ user, setUsers }) => {
  const handleUpdate = (id) => {
    setUsers((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, likes : item.likes + 1 };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <li key={user.id}>
      {user.name}
      <button onClick={() => handleUpdate(user.id)} className="btn">
        {user.likes} Likes
      </button>
    </li>
  );
};

export default User;
