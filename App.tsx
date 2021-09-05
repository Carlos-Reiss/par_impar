import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

import Home from "./src/home";

export default function App() {
  const [count, setCount] = useState<number>(0);

  let [fontsLoaded] = useFonts({
    "Inter-SemiBoldItalic":
      "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
  });
  if (!fontsLoaded) {
    return <Text>Carregando</Text>;
  } else {
    return (
      <View style={styles.container}>
        <Home count={count} setCount={setCount} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#999",
    alignItems: "center",
    justifyContent: "center",
  },
});
