import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { App } from "containers";
import { configureStore } from "store";
import * as serviceWorker from "./serviceWorker";
import "font-awesome/css/font-awesome.min.css";

const target = document.querySelector("#root");
const store = configureStore(axios, {});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    target
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
