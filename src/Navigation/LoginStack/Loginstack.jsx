import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Otp from '../../screen/Login/Otp';
import Login from '../../screen/Login/Login';

const Stack = createStackNavigator();

const LoginStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="otp" component={Otp} />
        </Stack.Navigator>
        </NavigationContainer>
    );
};

export default LoginStack;