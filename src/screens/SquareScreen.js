import React, { useReducer } from 'react';
import { View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  const { red, green, blue } = state;
  switch (action.type) {
    case 'CHANGE_RED':
      return red + action.payload > 255 || red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'CHANGE_GREEN':
      return green + action.payload > 255 || green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'CHANGE_BLUE':
      return blue + action.payload > 255 || blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ type: 'CHANGE_RED', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'CHANGE_RED', payload: -COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ type: 'CHANGE_GREEN', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'CHANGE_GREEN', payload: -COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ type: 'CHANGE_BLUE', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'CHANGE_BLUE', payload: -COLOR_INCREMENT })}
      />
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;
