import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main from '../screens/Main';
import PageOne from '../screens/PageOne';
import SectionTwo from '../screens/SectionTwo';

const Stack = createNativeStackNavigator();


const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Main} />
                <Stack.Screen name="PageOne" component={PageOne} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default AppNavigation;


