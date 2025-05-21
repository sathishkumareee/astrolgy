import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Auth'>
            <Stack.Screen name="Auth" component={AuthNavigation} options={{headerShown:false}} />
            <Stack.Screen name="App" component={AppNavigation}  options={{headerShown:false}}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
};
export default RootNavigation;