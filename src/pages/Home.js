import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addToCard } from "../context/action";
import Card from "../components/Card";
import ProductList from "../components/ProductList";
import ProductType from "../components/ProductType";

const Home = (props) => {
  const [items, setItems] = useState(null);
  const [data, setData] = useState([
    {
      id: 1,
      price: 16.99,
      name: "Practical Fog Shirt",
    },
    {
      id: 2,
      price: 15.99,
      name: "Unbranded Animal Shirt",
    },
    {
      id: 3,
      price: 20.99,
      name: "Handmade Fog Shirt",
    },
  ]);
  useEffect(() => {
    console.log("anasayfadayız!!!");
    fetch("http://localhost:8000/items")
      .then((response) => {
        console.log("response: ", response);
        return response.json();
      })
      .then((data) => {
        console.log("data: ", data);
        setItems(data);
      });
  }, []);

  const handleAdd = (id) => {
    console.log("id: ", id);
    const newItems = data.filter((item) => item.id !== id);
    setData(newItems);
  };

  return (
    <div className="home">
      <ProductType />
      {items && <ProductList items={items} handleAdd={handleAdd} />}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     items: state.items,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addToCard: (id) => {dispatch(addToCard(id))}
//     }
// }

// export default connect(mapStateToProps, { getItems })(Home);

export default Home;
