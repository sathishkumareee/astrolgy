import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screen/Login/Login';
import Otp from '../screen/Login/Otp';

const Stack = createStackNavigator();

const AuthNavigation = () => {
    return (

            <Stack.Navigator initialRouteName='login' >
            <Stack.Screen name="login" component={Login}  options={{headerShown:false}} />
            <Stack.Screen name="otp" component={Otp}  />
        </Stack.Navigator>

    );
};
export default AuthNavigation;