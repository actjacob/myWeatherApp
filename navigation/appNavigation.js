import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogBox } from "react-native";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs(["Non-seralizable values were found in the navigation state"]);

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: true }} component={HomeScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
