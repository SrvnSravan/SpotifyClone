import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './app/navigators/Navigation';
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/main-screens/HomeScreen';
import TopBar from './app/components/TopBar';
import AnimatedButton from './app/components/AnimatedButton';

const App = () => {
  return (
      <HomeScreen />
      
  );
};

export default App;

const styles = StyleSheet.create({});
