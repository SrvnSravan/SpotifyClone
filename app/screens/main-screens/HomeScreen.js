import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row', padding: 5}}>
        <Image
          source={require('../../assets/images/th.jpg')}
          style={styles.logo}
        />
        <Text style={styles.textContainer}>Good Morning</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  logo: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
});
