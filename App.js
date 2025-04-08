import React, { useState, useEffect, useCallback } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./screens/welcomeScreen";
import RadioScreen from "./screens/radioScreen";
import Programa from "./screens/Programa";
import Nosotros from "./screens/Nosotros";
import Menu from "./components/menu";
import Contacto from "./screens/Contacto";
import LikedSongs from "./screens/LikedSongs";
const Stack = createStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepareApp() {
      try {
        setAppIsReady(true);
      } catch (error) {
        console.error("Error during app preparation:", error);
        setAppIsReady(true);
      }
    }
    prepareApp();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <View style={styles.loadingContainer} onLayout={onLayoutRootView}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Radio"
          component={RadioScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Programa" component={Programa} />
        <Stack.Screen name="Nosotros" component={Nosotros} />
        <Stack.Screen name="Contacto" component={Contacto} />
        <Stack.Screen name="LikedSongs" component={LikedSongs} />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
