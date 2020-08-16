import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import MenuItem from '../../components/MenuItem';
import Avatar from '../../components/Avatar';
import styles from './styles';

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableWithoutFeedback
            onPress={() => console.log('Avatar Clicked')}
            activeOpacity={1}
            style={styles.avatarHolder}
          >
            <Avatar size={120} imageSource={require('../../../assets/avatar.jpg')} />
          </TouchableWithoutFeedback>
          <Text style={styles.userNameText}>Rocky Nguyen</Text>
        </View>
      </View>
      <View style={styles.menu}>
        <View style={styles.menuGroup}>
          <MenuItem
            title="My Account"
            iconName="user"
            onPress={() => navigation.navigate('Square')}
          />
          <MenuItem
            title="My Vouchers"
            iconName="tag"
            badge={{ count: 10, color: '#e03131' }}
            onPress={() => navigation.navigate('Square')}
          />
          <MenuItem
            title="Payment"
            iconName="credit-card"
            onPress={() => navigation.navigate('Square')}
          />
          <MenuItem title="Address" iconName="map-pin" />
        </View>
        <View style={styles.menuGroup}>
          <MenuItem title="Intive Friends" iconName="user-plus" />
          <MenuItem title="Feedback" iconName="mail" />
        </View>
        <View style={styles.menuGroup}>
          <MenuItem title="User Policy" iconName="help-circle" />
          <MenuItem title="Settings" iconName="settings" />
          <MenuItem title="About Us" iconName="info" />
        </View>
      </View>

      <TouchableWithoutFeedback
        style={styles.logoutButton}
        onPress={() => console.log('Log Out Clicked')}
      >
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableWithoutFeedback>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Version 1.0.0</Text>
        <Text style={styles.footerText}>SOLID Engineer</Text>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
