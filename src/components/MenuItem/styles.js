import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  holder: {
    height: 50,
    paddingHorizontal: 15,
    borderColor: '#dee2e6',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  badge: {
    marginRight: 10,
    padding: 5,
    borderRadius: 20,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
});
