import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductList from "./ProductList";
import ShirtList from "./ShirtList";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import { loadItems } from "../context/action";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("mug");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(16);
  const { items } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const lastProductIndex = currentPage * itemPerPage;
  const firstProductIndex = lastProductIndex - itemPerPage;
  const currentProducts = items.slice(firstProductIndex, lastProductIndex);

  useEffect(() => {
    dispatch(loadItems());
  }, []);

  return (
    <div className="tabs">
      <ul className="tabNav">
        <TabNavItem title="Mug" id="mug" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabNavItem title="Shirt" id="shirt" activeTab={activeTab} setActiveTab={setActiveTab} />
      </ul>
      <div className="outlet">
      <TabContent id="mug" activeTab={activeTab}>
          <p>Tab 1 works!</p>
          {items && <ProductList items={currentProducts} />}
        </TabContent>
        <TabContent id="shirt" activeTab={activeTab}>
          <p>Tab 2 works!</p>
          {items && <ShirtList items={currentProducts} />}
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;
