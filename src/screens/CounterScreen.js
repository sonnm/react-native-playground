import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button title="Increase" onPress={() => setCounter((prevState) => prevState + 1)} />
      <Button title="Decrease" onPress={() => setCounter((prevState) => prevState - 1)} />
      <Text>Current Counter: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
