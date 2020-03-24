import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import getDistance from 'geolib/es/getDistance';
import LoginTF from './src/components/LoginTextField';
import LoginButton from "./src/components/LoginButton";

export default function App() {
  const [firstLat, setFirstLat] = useState("");
  const [firstLong, setFirstLong] = useState("");
  const [secondLat, setSecondLat] = useState("");
  const [secondLong, setSecondLong] = useState("");
  let distance;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calculate Distance</Text>
      <View style={styles.latLongV}>
        <LoginTF
          placeholder="Enter First Lat"
          textChanged={text => setFirstLat(text)}
        ></LoginTF>
        <LoginTF
          placeholder="Enter First Long"
          textChanged={text => setFirstLong(text)}
        ></LoginTF>
      </View>

      <View style={styles.latLongV}>
        <LoginTF
          placeholder="Enter Second Lat"
          textChanged={text => setSecondLat(text)}
        ></LoginTF>
        <LoginTF
          placeholder="Enter Second Long"
          textChanged={text => setSecondLong(text)}
        ></LoginTF>
      </View>
      <LoginButton title="Submit"></LoginButton>

      <Text style={styles.distanceText}>
        Calculated distance is: - {getDistance(
          { latitude: firstLat, longitude: firstLong },
          { latitude: secondLat, longitude: secondLong }
        )}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: "column"
  },
  latLongV: {
    // flexDirection: "row",
    // justifyContent: "space-around"
  },
  text: {
    marginTop: 60,
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },
  distanceText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40
  }
});
