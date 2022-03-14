import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { creatStackNavigator, createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "../screens/LoadingScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../Navigation/Navigation";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC3H_MzWM3YoLWd2NO86321itBzRajwwpk",
  authDomain: "movie-43b44.firebaseapp.com",
  databaseURL: "https://movie-43b44.firebaseio.com",
  storageBucket: "movie-43b44.appspot.com"
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
    Home: HomeScreen
});

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
});

const AuthNavigation = createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppStack,
            Auth: AuthStack
        },
        {
            initialRouteName: "Loading"
        }
    )
);

export default AuthNavigation
