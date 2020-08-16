import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MenuItem from '../../components/MenuItem';

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white', marginBottom: 10 }}>
        <View style={{ alignItems: 'center', paddingVertical: 20 }}>
          <TouchableOpacity
            onPress={() => {
              console.log('Avatar Clicked');
            }}
            activeOpacity={1}
          >
            <View
              style={{
                width: 120,
                height: 120,
                backgroundColor: '#e9ecef',
                borderRadius: 60,
                overflow: 'hidden',
                marginVertical: 15,
              }}
            >
              <Image
                source={require('../../../assets/avatar.jpg')}
                style={{ width: 120, height: 120 }}
              />
            </View>
          </TouchableOpacity>
          <Text style={{ fontWeight: '600' }}>Rocky Nguyen</Text>
        </View>
      </View>
      <View style={{ marginBottom: 10 }}>
        <View style={{ marginBottom: 10, backgroundColor: 'white' }}>
          <View
            style={{
              height: 50,
              paddingHorizontal: 15,
              borderColor: '#dee2e6',
              borderBottomWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="settings" size={20} style={{ marginRight: 10 }} />
              <Text>My Vouchers</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  marginRight: 10,
                  backgroundColor: '#e03131',
                  padding: 5,
                  borderRadius: 20,
                }}
              >
                <Text style={{ color: 'white', fontSize: 12 }}>200</Text>
              </View>
              <Icon name="chevron-right" size={20} />
            </View>
          </View>
          <MenuItem
            title="Payment"
            iconName="credit-card"
            onPress={() => navigation.navigate('Square')}
          />
          <MenuItem title="Address" />
        </View>
        <View style={{ marginBottom: 10, backgroundColor: 'white' }}>
          <MenuItem title="Settings" iconName="settings" />
          <MenuItem title="User Policy" />
          <MenuItem title="About Us" iconName="info" />
        </View>
      </View>

      <View
        style={{
          borderWidth: 1,
          borderColor: '#fa5252',
          marginBottom: 20,
          marginHorizontal: 30,
          borderRadius: 100,
        }}
      >
        <TouchableOpacity
          style={{ padding: 10, alignItems: 'center' }}
          activeOpacity={1}
          onPress={() => {
            console.log('Log Out Clicked');
          }}
        >
          <Text style={{ color: '#fa5252' }}>Log Out</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: '#868e96', marginBottom: 5 }}>Version 1.0.0</Text>
        <Text style={{ color: '#868e96', marginBottom: 5 }}>SOLID Engineer</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
