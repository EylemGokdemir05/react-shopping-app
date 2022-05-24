import React from "react";

const ProductList = ({ items, handleAdd }) => {
  return (
    <div className="product-list">
      {items.map((item) => {
        {
          console.log("new item: ", item);
        }
        <div className="item-preview" key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button onClick={() => handleAdd(item.id)}>Add</button>
        </div>;
      })}
    </div>
  );
};

export default ProductList;
