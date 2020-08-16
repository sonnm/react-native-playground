import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: { backgroundColor: 'white', marginBottom: 10 },
  headerContent: { alignItems: 'center', paddingVertical: 20 },
  avatarHolder: { marginVertical: 15 },
  menu: {
    marginBottom: 10,
  },
  menuGroup: {
    marginBottom: 10,
    backgroundColor: 'white',
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    color: '#868e96',
    marginBottom: 5,
  },
  userNameText: {
    fontWeight: '600',
  },
  logoutButton: {
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fa5252',
    marginBottom: 20,
    marginHorizontal: 30,
    borderRadius: 100,
  },
  logoutButtonText: {
    color: '#fa5252',
  },
});
