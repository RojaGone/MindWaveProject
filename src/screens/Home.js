import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  LayoutAnimation,
  Animated,
} from 'react-native';
import {
  IconButton,
  List,
  MD3LightTheme as DefaultTheme,
} from 'react-native-paper';
import DropDown from '../components/DropDown';
import Records from '../Data/records.json';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Foundation';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const ExpandableComponent = ({item, selectedItem, onClickFunction}) => {
  const [layoutHeight, setLayoutHeight] = useState(0);
  const [showOption, setShowOption] = useState(false);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: showOption ? '#517178' : 'white',
        borderRadius: 10,
      }}>
      <Text
        style={{
          color: 'white',
          transform: [{rotateX: '50deg'}, {rotateZ: '90deg'}],
          width: 180,
          height: 30,
          marginVertical: 40,
          alignSelf: 'flex-start',
          marginStart: -75,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingTop: 5,
          backgroundColor: showOption ? 'blue' : `${item.bgColor}`,
          textAlign: 'center',
          alignContent: 'space-between',
        }}>
        {showOption ? 'Open' : item.Status}
      </Text>

      <Text
        style={{
          fontSize: 16,
          fontWeight: '500',
          color: showOption ? 'white' : 'black',
          marginTop: 5,
          marginStart: -40,
          marginBottom: 66,
          alignSelf: 'center',
        }}>
        {item.CompanyName} {'\n'}
        {item.FromDate} - {item.ToDate}
      </Text>
      <TouchableOpacity onPress={() => setShowOption(!showOption)}>
        <Icon
          name="caretdown"
          size={15}
          color="#121110"
          style={styles.iconStyle}
        />
      </TouchableOpacity>

      {showOption && (
        <View style={{overflow: 'hidden', backgroundColor: 'white'}}>
          {item.subCategory.map((item, key) => (
            <View
              key={key}
              style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10}}>
              <Text key={key}
                style={{color: 'black', fontWeight: 'bold', marginStart: 20}}>
                Regular Hours
              </Text>
              <Text style={{color: 'black', marginStart: -103}}>
                {'\n'} {item.RegularHours}
              </Text>
              <Text
                style={{color: 'black', marginStart: 200, fontWeight: 'bold'}}>
                Total Hours
              </Text>
              <Text style={{color: 'black', marginStart: -40}}>
                {'\n'}
                {item.TotalHours}
              </Text>
              <Text
                style={{color: 'black', fontWeight: 'bold', marginStart: 20}}>
                {'\n'}Employee Remarks
              </Text>
              <Text style={{color: 'black', marginStart: -130, marginTop: 20}}>
                {'\n'} {item.EmployeeRemarks}
              </Text>
              <Text
                style={{color: 'black', marginStart: 210, fontWeight: 'bold'}}>
                {'\n'}Submitted Date
              </Text>
              <Text style={{color: 'black', marginStart: -80, marginTop: 20, marginBottom: 20}}>
                {'\n'} {item.SubmittedDate}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [listDataSource, setListDataSource] = useState(Records);
  const nav = useNavigation();
  const [showMenu, setShowMenu] = useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const onSelect = item => {
    setSelectedItem(item);
  };

  const updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    array[index]['isExpanded'] = !array[index]['isExpanded'];
    setListDataSource(array);
  };
 
  return (
    <SafeAreaView style={styles.Container}>
      <View
        style={{
          justifyContent: 'flex-start',
          padding: 25,
          marginTop: 50,
          flexDirection: 'column',
        }}>
        <TouchableOpacity
          onPress={() => {
            nav.navigate('ViewTimesheets');
          }}>
          <Text style={{color: 'black', fontSize: 17, fontWeight: 'bold'}}>
            {' '}
            <Icon1 name="clipboard-notes" size={20} color="#121110" /> View
            TimeSheet
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            nav.navigate('EnterTimesheet');
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 17,
              fontWeight: 'bold',
              marginTop: 20,
            }}>
            <Icon2 name="timetable" size={20} color="#121110" /> Enter TimeSheet
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            nav.navigate('ChangePassword');
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 17,
              fontWeight: 'bold',
              marginTop: 20,
              marginStart: -5,
            }}>
            {' '}
            <Icon3 name="lock" size={20} color="#121110" /> Change Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text
            style={{
              color: 'black',
              fontSize: 17,
              fontWeight: 'bold',
              marginTop: 20,
              marginStart: -5,
            }}>
            {' '}
            <Icon4 name="poweroff" size={20} color="#121110" /> Logout
          </Text>
        </TouchableOpacity>
      </View>
      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: '#e5e5e5',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          transform: [{scale: scaleValue}, {translateX: offsetValue}],
        }}>
        <View style={styles.Hview1}>
          <TouchableOpacity
            onPress={() => {
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                toValue: showMenu ? 0 : 220,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}>
            <IconButton size={30} icon="menu" />
          </TouchableOpacity>

          <IconButton size={30} icon="plus" />
        </View>

        <View style={styles.Hview2}>
          <DropDown onSelect={onSelect} value={selectedItem} />
        </View>

        <FlatList
          data={Records}
          renderItem={({item, key}) => {
            if (item.Status === selectedItem) {
              return (
                <View style={styles.Hview3} key={key}>
                  <ExpandableComponent
                    key={item.CompanyName}
                    item={item}
                    selectedItem={selectedItem}
                    onClickFunction={() => {
                      updateLayout(key);
                    }}
                  />
                </View>
              );
            } else if (selectedItem === null || selectedItem === 'Status') {
              return (
                <View style={styles.Hview3} key={item.id}>
                  <ExpandableComponent
                    key={item.CompanyName}
                    item={item}
                    onClickFunction={() => {
                      updateLayout(key);
                    }}
                  />
                </View>
              );
            }
          }}
        />
      </Animated.View>
    </SafeAreaView>
  );
};
// e5e5e5
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  Hview1: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Hview2: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginEnd: 5,
    marginBottom: 5,
  },
  Hview3: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginStart: 5,
    marginEnd: 5,
    marginBottom: 5,
    borderRadius: 10,
    elevation: 5,
    marginTop: 10,
  },
  text: {
    color: 'black',
    marginStart: 50,
    marginTop: 10,
  },
  iconStyle: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginStart: 40,
  },
  subDropDownStyle: {
    elevation: 5,
    backgroundColor: '#e8edec',
    marginStart: 10,
    marginEnd: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    color: 'black',
    fontSize: 20,
  },
  accordianStyle: {
    backgroundColor: '#2e3c59',
    color: 'white',
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#c8c8c8',
    width: '100%',
  },
  FlatItemStyle: {
    marginStart: 5,
    marginEnd: 5,
    borderRadius: 20,
    borderBottomLeftRadius: 10,
  },
});

export default Home;

