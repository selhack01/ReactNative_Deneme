import React from "react";
import { View } from "react-native";
import { NCoreProvider, Text } from "ncore-mobile";
import { GestureHandlerRootView } from "react-native-gesture-handler"
import stylesheet from "./stylesheet";
import Navigation from "./navigation";

const NcoreContextAPI = () => {
  return <View style={{ flex: 1 }}>
    <Navigation />
  </View>
};

const App = () => {
  return <GestureHandlerRootView
    style={stylesheet.container}
  >
    {/*@ts-ignore*/}
    <NCoreProvider>
      <NcoreContextAPI />
    </NCoreProvider>
  </GestureHandlerRootView>
};
export default App;
