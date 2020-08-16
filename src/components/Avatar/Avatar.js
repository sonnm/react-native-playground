import React from 'react';
import { View, Image } from 'react-native';

const Avatar = ({ size, imageSource }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: '#e9ecef',
        borderRadius: size / 2,
        overflow: 'hidden',
      }}
    >
      <Image source={imageSource} style={{ width: size, height: size }} />
    </View>
  );
};

export default Avatar;
