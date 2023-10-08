import LoginScreen from "../components/LoginScreen";
import VoteScreen from "../components/VoteScreen";
import PasswordGenerateScreen from "../components/PasswordGenerateScreen";
import PayScreen from "../components/PayScreen";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

const AppNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="VoteScreen" component={VoteScreen} />
        <Stack.Screen name="PasswordGenerateScreen" component={PasswordGenerateScreen} />
        <Stack.Screen name="PayScreen" component={PayScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );
};

export default AppNavigator;