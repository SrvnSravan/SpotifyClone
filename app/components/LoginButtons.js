import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const LoginButtons = ({pressable, title, buttonText}) => {
  const containerStyle = pressable ? styles.pressable : styles.normalPressable;
  const textStyle = buttonText ? styles.buttonText : styles.normalButtonText;
  return (
    <View>
      <TouchableOpacity style={containerStyle}>
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginButtons;

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: '#1DB954',
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 300,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  normalPressable: {
    backgroundColor: '#131624',
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 300,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderColor: '#C0C0C0',
    borderWidth: 0.8,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
  },
  normalButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});
