import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Records from '../Data/records.json';

const DropDown = ({value = {}, onSelect = () => {}}) => {
  const [showOption, setShowOption] = useState(false);
  const StatusDropDown = ["Submitted", "Rejected", "Approved", "Status"];
  const onSelectedItem = record => {
    setShowOption(false);
    onSelect(record);
  };

  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.dropDownStyle}
        activeOpacity={0.8}
        onPress={() => setShowOption(!showOption)}>
        <Text style={styles.text}>
          {!!value ? value : `Status`}{'   '}
          {!!showOption ? (
            <Icon name="caretdown" size={15} color="#121110" />
          ) : (
            <Icon name="caretup" size={15} color="#121110" />
          )}{' '}
        </Text>
      </TouchableOpacity>
      {showOption && (
        <View>
          {StatusDropDown.map(record => {
            return (
              <TouchableOpacity
               key={record.CompanyName}
                onPress={() => onSelectedItem(record)}>
                <Text key={record.id} style={{color: 'black', fontSize: 20, marginStart: 5}}>
                  {record}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  dropDownStyle: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    minHeight: 42,
    justifyContent: 'center',
  },
  text: {
    color: '#121110',
    fontSize: 18,
    borderBottomWidth: 1,
    marginTop: 10,
    paddingBottom: 8,
    marginEnd: 230,
  },
});

export default DropDown;
