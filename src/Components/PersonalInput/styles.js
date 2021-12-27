import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20
  },

  input: {
    height: 50,
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingLeft: 40,
    marginHorizontal: 20,
    borderRadius: 8,
    fontSize: 18,
    borderWidth: 1
  },

  borderDefault: {
    borderColor: '#e4e7eb'
  },

  borderError: {
    borderColor: '#e91e63'
  },

  icon: {
    position: 'absolute',
    left: 30,
    top: 12
  },

  iconColorError: {
    color: '#e91e63'
  },

  iconColorDefault: {
    color: '#7B8794'
  },

  iconSecurit: {
    position: 'absolute',
    right: 30,
    top: 12
  }
})