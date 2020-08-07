
import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './components/Home';
import Info from "./components/Info";
import Login from "./components/Login";
import Loading from './components/Loading';
import signUp from './components/SignUp';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
   
    createHomeStack = () =>
    <Stack.Navigator screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
        {/* <Stack.Screen name="Loading" component={Loading} /> */}
        <Stack.Screen name="SignUp" component={signUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Info" component={Info} />
    </Stack.Navigator>

    render() {

        return (
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Home" children={this.createHomeStack}/>
                    <Drawer.Screen name="Info" component={Info}/>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
};


  

