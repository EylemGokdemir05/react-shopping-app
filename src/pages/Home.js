import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addToCard } from "../context/action";
import { getItems } from "../context/action";

const Home = (props) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    props.getItems();
  }, []);
  return (
    <div className="container">
      <h3>Home</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addToCard: (id) => {dispatch(addToCard(id))}
//     }
// }

export default connect(mapStateToProps, { getItems })(Home);

// export default Home;
