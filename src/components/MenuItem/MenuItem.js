import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import styles from './styles';

const propTypes = {
  title: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  onPress: PropTypes.func,
  badge: PropTypes.shape({
    count: PropTypes.number,
    color: PropTypes.string,
  }),
};

const defaultProps = {
  iconName: '',
  onPress: () => {},
  badge: {},
};

const MenuItem = ({ title, iconName, onPress, badge }) => {
  return (
    <TouchableOpacity style={styles.holder} onPress={onPress} activeOpacity={1}>
      <View style={styles.item}>
        {iconName && <Icon name={iconName} size={20} style={styles.icon} />}
        <Text>{title}</Text>
      </View>
      <View style={styles.item}>
        {badge && (
          <View style={{ ...styles.badge, backgroundColor: badge.color }}>
            <Text style={styles.badgeText}>{badge.count}</Text>
          </View>
        )}
        <Icon name="chevron-right" size={20} />
      </View>
    </TouchableOpacity>
  );
};

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

export default MenuItem;
