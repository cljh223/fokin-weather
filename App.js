import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.blueiew}>
        <Text>hello blue</Text>
      </View>
      <View style={styles.yellowView}>
        <Text>hello yellow</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: "black"
  },
  yellowView: {
    flex: 1,
    backgroundColor: "yellow"
  },
  blueiew: {
    flex: 1,
    backgroundColor: "blue"
  }
});
