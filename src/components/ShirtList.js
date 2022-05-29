import React, { useState, useEffect } from "react";
import { addedItems, loadItems } from "../context/action";
import { useDispatch } from "react-redux";
import ProductList from "./ProductList";

const ShirtList = ({ items }) => {
    console.log("shirt list items:",items)
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItems());
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {items?.map((item) => {
        return (
          <div className="item-preview" key={item.added}>
            {item.itemType === "shirt" ? (
              <>
              <img src={require("../assets/shirt.png")} width="92" height="92"></img>
              <p>{item.price}</p>
              <h3>{item.name}</h3>
            </>
            ) : (
                <>
                <img src={require("../assets/mug.png")} width="92" height="92"></img>
                <p>{item.price}</p>
                <h3>{item.name}</h3>
              </>
            )}
            {/* {item.itemType === "mug" ? (
              <img src={require('../assets/mug.png')} width="92" height="92"></img>
            ) : (
              <img src={require('../assets/shirt.png')} width="92" height="92"></img>
            )}
            <p>{item.price}</p>
            <h3>{item.name}</h3> */}
            <button onClick={() => dispatch(addedItems(item))}>Add</button>
          </div>
        );
      })}
    </div>
  );
};

export default ShirtList;
