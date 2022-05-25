import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addedItems, loadItems } from "../context/action";
import Card from "../components/Card";
import ProductList from "../components/ProductList";
import ProductType from "../components/ProductType";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";

const Home = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(16);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.items);
  useEffect(() => {
    console.log("anasayfadayız!!!");
    dispatch(loadItems());
  }, []);

  const lastProductIndex = currentPage * itemPerPage;
  const firstProductIndex = lastProductIndex - itemPerPage;
  const currentProducts = items.slice(firstProductIndex, lastProductIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="home">
      <button onClick={() => navigate('/card')}>Card</button>
      <ProductType />
      {items && <ProductList items={currentProducts} />}
      <Pagination itemPerPage={itemPerPage} totalItems={items.length} paginate={paginate} />
    </div>
  );
};

export default Home;
