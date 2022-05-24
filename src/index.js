import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reducer from "../src/context/reducer";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "../src/context/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = setupStore();
console.log("store: ", store);
root.render(
  // <React.StrictMode>
  //   <Provider store={store}>
  //     <App />
  //   </Provider>
  // </React.StrictMode>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
