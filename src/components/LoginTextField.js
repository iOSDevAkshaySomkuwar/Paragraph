import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

const LoginTextField = ({placeholder, textChanged}) => {
    return (
      <View style={styles.bgV}>
        <TextInput style={styles.tf} placeholder={placeholder} onChangeText={(value) => textChanged(value)}></TextInput>
      </View>
    );
};

const styles = StyleSheet.create({
    bgV: {
        backgroundColor: 'white',
        height: 50,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray'
    },
    tf: {
        color: 'black',
        fontSize: 18,
        marginLeft: 10,
        marginRight: 10,
        flex: 1
    }
});

export default LoginTextField;