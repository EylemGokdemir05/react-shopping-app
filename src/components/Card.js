import React from "react";

const Card = ({ items }) => {
  //   items.map((item) => {
  //     console.log("card item: ", item);
  //   });

  return (
    <div className="cardContainer">
      <h3>Card</h3>
      {items.map((item) => {
        <div className="card" key={item.added}>
          <p className="name">{item.added}</p>
          <p className="name">{item.itemType}</p>
          {item.itemType === "mug" ? (
            <img src="../assets/mug.png" width="92" height="92" style={{ backgroundColor: "green" }}></img>
          ) : (
            <img src="../assets/shirt.png" width="92" height="92"></img>
          )}
          <p className="price">{item.price}</p>
          <p className="name">{item.name}</p>
          <p>
            <button>Add</button>
          </p>
        </div>;
      })}
    </div>
  );
};

export default Card;
