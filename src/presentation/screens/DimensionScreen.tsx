import {StyleSheet, useWindowDimensions, View} from 'react-native';
//import {Dimensions} from 'react-native';
import {Text} from 'react-native-paper';

//const {width, height} = Dimensions.get('window');

export const DimensionScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.purpleBox} />
      </View>
      <Text>
        w:{width}, h:{height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  //   title: {
  //     fontSize: 20,
  //     borderWidth: 10,
  //     paddingHorizontal: 30,
  //     paddingVertical: 10,
  //   },
  purpleBox: {
    height: '50%',
    backgroundColor: 'purple',
  },
});
