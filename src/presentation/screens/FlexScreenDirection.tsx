import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const FlexScreenDirection = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box1, styles.box]} />
      <View style={[styles.box2, styles.box]} />
      <View style={[styles.box3, styles.box]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: '#5856D6',
  },
  box2: {
    backgroundColor: '#4240a2',
  },
  box3: {
    backgroundColor: '#2e2d71',
  },
});
