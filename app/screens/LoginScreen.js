import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginButtons from '../components/LoginButtons';

const LoginScreen = () => {
  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{flex: 1}}>
      <SafeAreaView>
      <View style={{height: 80}} />
      <View style={styles.logoContainer}>
     <Image source={require("../assets/images/Spotify.png")}
     style={styles.logo}/>
     </View>
      <Text style={styles.text}>Millions of Songs Free on Spotify!</Text>
      <LoginButtons />
      <LoginButtons pressable={false}/>
      <LoginButtons pressable={false}/>
      <LoginButtons pressable={false}/>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

 const styles = StyleSheet.create({
  logo: {
    height: 80, 
    width: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 80
    }

 });
