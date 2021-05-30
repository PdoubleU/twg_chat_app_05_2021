import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import RoomsScreen from "./src/views/Rooms";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderRightComponent from "./src/components/header/HeaderRightComponent";
import { Example } from "./src/views/Chat";
import { headerStyles } from "./src/styles/styleSheet";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./src/api/apolloClient";

const buttonIsNotWorking = () => {
  alert("Sorry, this function is not available yet!");
};
const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    SFCompactTextRegular: require("./assets/fonts/sf-compact-text-regular.ttf"),
    SFCompactTextLight: require("./assets/fonts/sf-compact-text-light.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
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
