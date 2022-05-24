import React from "react";

const ProductList = ({ items, handleAdd }) => {
  return (
    <div className="product-list">
      {items.map((item) => {
        return (
          <div className="item-preview" key={item.id}>
            {item.itemType === "mug" ? (
              <img src="../assets/mug.png" width="92" height="92"></img>
            ) : (
              <img src="../assets/shirt.png" width="92" height="92"></img>
            )}
            <p>{item.price}</p>
            <h3>{item.name}</h3>
            <button onClick={() => handleAdd(item.id)}>Add</button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
