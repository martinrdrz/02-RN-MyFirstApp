import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}> BoxObjectModelScreen</Text> */}
      <View style={styles.purpleBox}>
        <Text> BoxObjectModelScreen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
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
