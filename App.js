import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './app/navigators/Navigation';
import LoginScreen from './app/screens/LoginScreen';

const App = () => {
  return (
    <View>
      <LoginScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
