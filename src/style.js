import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  display: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  teks: {margin: 20, fontSize: 60},
  total: {marginRight: 20, marginBottom: 20, fontSize: 24},
  teksButton: {fontSize: 20, fontWeight: 'bold'},
  containerButton: {flex: 1, flexDirection: 'row'},
  buttonComponent: {
    flex: 1,
    backgroundColor: '#d1d1d1',
    margin: 8,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
