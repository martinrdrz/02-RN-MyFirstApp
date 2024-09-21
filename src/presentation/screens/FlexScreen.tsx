import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  box1: {
    backgroundColor: '#585606',
    flex: 1,
  },
  box2: {
    backgroundColor: '#4240a2',
    flex: 2,
  },
  box3: {
    backgroundColor: '#2e2d71',
    flex: 3,
  },
});
