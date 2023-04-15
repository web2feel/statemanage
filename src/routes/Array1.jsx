import React, { useState } from "react";

const Array1 = () => {
  const initFruits = ["orange", "apple", "mango"];
  
  const [fruits, setFruits] = useState(initFruits);
  const [newFruit, setNewFruit] = useState("")
  const handleSubmit = ()  => {
    setFruits(prev => [...prev,newFruit])
    setNewFruit("")
  }


  const initColors = ["Yellow", "Green", "Blue", "Pink", "Violet"];
  const [colors, setColors] = useState(initColors);

  const handleDelete = (id) => {
    const filteredArray = colors.filter((item,index) => {
        return index !== id
    })
    setColors(filteredArray)
    console.log(filteredArray)
  }
  return (
    <>
      <div className="page-title">
        <h2>Array States - 1</h2>
        <p>Managing array states in React</p>
      </div>

      <div className="box">
        <ul className="list">
          {fruits.map((fruit, i) => {
            return <li key={i}> {fruit}</li>;
          })}
        </ul>
        <div className="text-center">
          <input value={newFruit} type="text" className="text-control" onChange={(e) => setNewFruit(e.target.value) }  />
          <button onClick={handleSubmit} className="btn btn-primary">Add Fruit</button>
        </div>
      </div>

      <div className="box">
        <h3 className="text-center">
          Delete the item from list when clicked on the button
        </h3>
        <ul className="list">
          {colors.map((fruit,i) => {
            return (
              <li key={i}>
                {fruit}
                <button onClick={() => handleDelete(i)} className="btn">Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Array1;
