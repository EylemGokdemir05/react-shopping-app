import React from "react";
import { connect } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../context/action";

const Card = ({ items, increaseQuantity, decreaseQuantity }) => {
  //   items.map((item) => {
  //     console.log("card item: ", item);
  //   });
  console.log("card items: ", items);
  let cardList = [];
  let total = 0;
  Object.keys(items.addedProducts).forEach(function (item) {
    total += items.addedProducts[item].quantity * items.addedProducts[item].price;
    cardList.push(items.addedProducts[item]);
  });

  function totalPrice(price, tonggia) {
    return Number(price * tonggia).toLocaleString("en-US");
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cardList.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <span className="btn btn-primary" style={{ margin: "2px" }} onClick={() => decreaseQuantity(key)}>
                      -
                    </span>
                    <span className="btn btn-info">{item.quantity}</span>
                    <span className="btn btn-primary" style={{ margin: "2px" }} onClick={() => increaseQuantity(key)}>
                      +
                    </span>
                  </td>
                  <td>{totalPrice(item.price, item.quantity)}</td>
                </tr>
              );
            })}
            <tr>
              <td>{Number(total).toLocaleString("en-US")} $</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = state =>{
  console.log('state:',state)
    return{
        items:state.items
    }
}

export default connect(mapStateToProps,{increaseQuantity,decreaseQuantity})(Card);
