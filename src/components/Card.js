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
                <tr key={key} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                  </div>

                  <td style={{ width: "74px", height: "32.7px", display: "flex", justifyContent: "space-between" }}>
                    <span
                      className="btn btn-primary"
                      style={{ margin: "2px", color: "#1EA4CE" }}
                      onClick={() => decreaseQuantity(key)}
                    >
                      -
                    </span>
                    <span
                      className="btn btn-info"
                      style={{
                        color: "white",
                        backgroundColor: "#1EA4CE",
                        borderRadius: "6px",
                        width: "30px",
                        height: "21.46px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {item.quantity}
                    </span>
                    <span
                      className="btn btn-primary"
                      style={{ margin: "2px", color: "#1EA4CE" }}
                      onClick={() => increaseQuantity(key)}
                    >
                      +
                    </span>
                  </td>
                  {/* <td>{totalPrice(item.price, item.quantity)}</td> */}
                </tr>
              );
            })}
            <tr>
              <td>{Number(total).toLocaleString("en-US")} ₺</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state:", state);
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps, { increaseQuantity, decreaseQuantity })(Card);
