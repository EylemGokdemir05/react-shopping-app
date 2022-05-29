import React, { useState, useEffect } from "react";
import { addedItems, loadItems } from "../context/action";
import { useDispatch } from "react-redux";
import Pagination from "./Pagination";

const ProductList = ({ items, activeTab }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(16);
  const dispatch = useDispatch();

  var filteredItems = [];
  filteredItems = items?.filter((item) => item.itemType === activeTab);

  const lastProductIndex = currentPage * itemPerPage;
  const firstProductIndex = lastProductIndex - itemPerPage;
  filteredItems = filteredItems.slice(firstProductIndex, lastProductIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(loadItems());
  }, []);
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredItems?.map((item) => {
          return (
            <div className="item-preview" key={item.added}>
              {item.itemType == "mug" ? (
                <img
                  src={require("../assets/mug.png")}
                  width="92"
                  height="92"
                ></img>
              ) : (
                <img
                  src={require("../assets/shirt.png")}
                  width="92"
                  height="92"
                ></img>
              )}
              <p>{item.price}</p>
              <h3>{item.name}</h3>
              <button onClick={() => dispatch(addedItems(item))}>Add</button>
            </div>
          );
        })}
      </div>
      <Pagination
        itemPerPage={itemPerPage}
        totalItems={filteredItems.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ProductList;
