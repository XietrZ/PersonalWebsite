/* eslint-disable no-use-before-define */
/* eslint-disable react/style-prop-object */
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>sACEdor Personal Websitessss fuckkkkk shit</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

registerRootComponent(App);
