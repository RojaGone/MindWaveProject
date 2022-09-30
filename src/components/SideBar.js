import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    ScrollView,
    LayoutAnimation,
  } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { createDrawerNavigator } from '@react-navigation/drawer';
  import ViewTimesheets from '../screens/ViewTimesheets';

  const Drawer = createDrawerNavigator();

const SideBar = () => {
  return (
    // <NavigationContainer>
    //     <Drawer.Navigator>
    //   <Drawer.Screen key='ViewTimesheets' name='ViewTimesheets' component={ViewTimesheets} />
      
    // </Drawer.Navigator>
    // </NavigationContainer>

    <View>
      <Text style={styles.text}>View TimeSheet</Text>     
    <Text style={styles.text}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
  }
})

export default SideBar;