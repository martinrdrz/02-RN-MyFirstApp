import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const PositionScreen = () => {
  return (
    <View>
      <Text>PositionScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
  },
  title: {
    fontSize: 20,
    borderWidth: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  purpleBox: {
    height: 50,
    backgroundColor: 'purple',
  },
});
