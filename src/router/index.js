import React from 'react';
import Home from '../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ViewTimesheets from '../screens/ViewTimesheets';
import EnterTimesheet from '../screens/EnterTimesheet';
import ChangePassword from '../screens/ChangePassword';

const Stack = createNativeStackNavigator();
const options = {
    headerShown: false
}

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={options} />
        <Stack.Screen name="EnterTimesheet" component={EnterTimesheet}  />
        <Stack.Screen name="ChangePassword" component={ChangePassword}  />
        <Stack.Screen name="ViewTimesheets" component={ViewTimesheets} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
