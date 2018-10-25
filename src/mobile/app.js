/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import axios from "axios";
import { Apps } from "./containers";
import { Provider } from "react-redux";
import { configureStore } from "../shared/store";

const store = configureStore(axios, {});
type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <Apps />
            </Provider>
        );
    }
}
