import React from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const LoginButton = ({ title, onSubmit }) => {
  return (
    <TouchableOpacity onPress={() => onSubmit()}>
      <View style={styles.bgV}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bgV: {
    backgroundColor: "#DC7633",
    height: 50,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    fontWeight: "bold"
  }
});

export default LoginButton;
