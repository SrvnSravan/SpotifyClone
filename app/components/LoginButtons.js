import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const LoginButtons = ({pressable}) => {
    const  containerStyle = Pressable ? styles.pressable : styles.normalPressable;

  return (
    <View>
        <Pressable style={containerStyle}>
            <Text>Sign In with Spotify</Text>
        </Pressable>
    </View>
  )
}

export default LoginButtons

const styles = StyleSheet.create({
    pressable: {
        backgroundColor: "#1DB954",
        padding: 10,
        marginLeft: "auto",
        marginRight: "auto",
        width: 300,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10
    },
    normalPressable: {
        backgroundColor: "#131624",
        padding: 10,
        marginLeft: "auto",
        marginRight: "auto",
        width: 300,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        borderColor: "#C0C0C0",
        borderWidth: 0.8
    }
});