import React from 'react';
import {Provider} from 'react-redux'
import Store from './Store/configureStore'
import AuthNavigation from "./Navigation/authNavigation";
import {Text, TouchableOpacity, View} from "react-native";

export default class App extends React.Component {
      render() {
        return (
            <Provider store={Store}>
                <AuthNavigation/>
            </Provider>
        );
    }
}
