import React from "react";
import RoomsScreen from "./Rooms";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderRightComponent from "../components/header/HeaderRightComponent";
import { Example } from "./Chat";
import { headerStyles } from "../styles/styleSheet";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../api/apolloClient";

const buttonIsNotWorking = () => {
  alert("Sorry, this function is not available yet!");
};
const Stack = createStackNavigator();

export default function Root() {
  return (
    <NavigationContainer>
      <ApolloProvider client={apolloClient}>
        <Stack.Navigator
          initialRouteName="Rooms"
          screenOptions={{
            headerStyle: headerStyles.header,
            headerTitleStyle: headerStyles.title,
          }}
        >
          <Stack.Screen
            name="Rooms"
            component={RoomsScreen}
            options={{
              headerRight: () => (
                <HeaderRightComponent
                  handlePress={() => buttonIsNotWorking()}
                  type="rooms"
                />
              ),
            }}
          />
          <Stack.Screen
            name="Chat"
            component={Example}
            options={{
              title: null,
              headerRight: () => (
                <HeaderRightComponent
                  handlePress={() => buttonIsNotWorking()}
                  type="chat"
                />
              ),
            }}
          />
        </Stack.Navigator>
      </ApolloProvider>
    </NavigationContainer>
  );
}
