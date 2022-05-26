import React from "react";
import { addedItems } from "../context/action";
import { useDispatch } from "react-redux";

const ProductList = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {items?.map((item) => {
        return (
          <div className="item-preview" key={item.added}>
            {item.itemType === "mug" ? (
              <img src="../assets/mug.png" width="92" height="92"></img>
            ) : (
              <img src="../assets/shirt.png" width="92" height="92"></img>
            )}
            <p>{item.price}</p>
            <h3>{item.name}</h3>
            <button onClick={() => dispatch(addedItems(item))}>Add</button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
