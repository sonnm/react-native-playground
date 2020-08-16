import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const MenuItem = ({ title, iconName, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        height: 50,
        paddingHorizontal: 15,
        borderColor: '#dee2e6',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {iconName && <Icon name={iconName} size={20} style={{ marginRight: 10 }} />}
        <Text>{title}</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name="chevron-right" size={20} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default MenuItem;
