import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>This is the home screen</Text>
      <Button
        onPress={() => {
          navigation.navigate('List');
        }}
        title="List Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate('Image');
        }}
        title="Image Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate('Counter');
        }}
        title="Counter Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate('Color');
        }}
        title="Color Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate('Square');
        }}
        title="Square Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate('Text');
        }}
        title="Text Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate('Box');
        }}
        title="Box Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate('Profile');
        }}
        title="Profile Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});

export default HomeScreen;
