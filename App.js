import "react-native-gesture-handler";
import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Root from "./src/views/Root";
import { DataProvider } from "./src/providers/DataProvider";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./src/api/apolloClient";

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
    <ApolloProvider client={apolloClient}>
      <DataProvider>
        <Root></Root>
      </DataProvider>
    </ApolloProvider>
  );
}
