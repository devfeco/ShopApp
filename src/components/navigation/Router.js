import React, { Component } from 'react';

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

//import screens
import Detail from "../../screens/Detail";
import Login from "../../screens/Login"
import Welcome from "../../screens/Welcome";
import Payment from "../../screens/Payment";
import Reviews from "../../screens/Reviews";
import SignUp from "../../screens/SignUp"
import Verification from "../../screens/Verification";
import BottomNavigation from "./BottomNavigation";

const Router = createStackNavigator();

export default class  extends Component {
  render() {
    return (
        <NavigationContainer>
            <Router.Navigator screenOptions={{headerShown: false}} initialRouteName={"Welcome"}>
                <Router.Screen name={"BottomNavigation"} component={BottomNavigation}/>
                <Router.Screen name={"Welcome"} component={Welcome}/>
                <Router.Screen name={"Detail"} component={Detail}/>
                <Router.Screen name={"Login"} component={Login}/>
                <Router.Screen name={"Payment"} component={Payment}/>
                <Router.Screen name={"Reviews"} component={Reviews}/>
                <Router.Screen name={"SignUp"} component={SignUp}/>
                <Router.Screen name={"Verification"} component={Verification}/>
            </Router.Navigator>
        </NavigationContainer>
    );
  }
}
