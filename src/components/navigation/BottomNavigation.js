import React, { Component } from 'react';
import { View } from 'react-native';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from "react-native-vector-icons/Ionicons";

//import screens
import Home from "../../screens/Home";
import Card from "../../screens/Card";
import Profile from "../../screens/Profile";
import Settings from "../../screens/Settings";

const Bottom = createMaterialBottomTabNavigator();

export default class  extends Component {
  render() {
    return (
        <Bottom.Navigator
            initialRouteName={"Home"}
            screenOptions={{headerShown: false}}
            activeColor={"#F5BC42"}
            inactiveColor={"#5d5d5d"}
            barStyle={{backgroundColor:'white',fontWeight:'bold'}}>
            <Bottom.Screen
                name={"Home"}
                component={Home}
                options={{
                    tabBarIcon:({color}) => (
                        <View>
                            <Entypo name={"shop"} size={24} color={color}/>
                        </View>
                    ),
                }}/>
            <Bottom.Screen
                name={"Card"}
                component={Card}
                options={{
                    tabBarIcon:({color}) => (
                        <View>
                            <Entypo name={"shopping-bag"} size={24} color={color}/>
                        </View>
                    ),
                }}/>
            <Bottom.Screen
                name={"Profile"}
                component={Profile}
                options={{
                    tabBarIcon:({color}) => (
                        <View>
                            <Ionicons name={"person"} size={24} color={color}/>
                        </View>
                    ),
                }}/>
            <Bottom.Screen
                name={"Settings"}
                component={Settings}
                options={{
                    tabBarIcon:({color}) => (
                        <View>
                            <Ionicons name={"settings"} size={24} color={color}/>
                        </View>
                    ),
                }}/>
        </Bottom.Navigator>
    );
  }
}
