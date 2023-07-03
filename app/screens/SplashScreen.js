import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Navigate to  login screen
      // after the delay is finished
      navigation.navigate('LoginScreen');
    }, 2000);

    return () => clearTimeout(timeout); // Clear the timeout on unmount
  }, []);

  return (
    <View>
      <Image
        source={require('../assets/images/SplashScreen.jpg')}
        style={styles.splashScreen}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashScreen: {
    height: 720,
    width: 400,
  },
});
