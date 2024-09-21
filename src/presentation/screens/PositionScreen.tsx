import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox} />
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    position: 'relative',
    borderColor: 'white',
  },
  greenBox: {
    //width: 100,
    //height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    // bottom: 0,
    // right: 0,
    // top: 0,
    // left: 0,
  },
});
