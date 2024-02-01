import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View
} from "react-native";
import { Stack } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
// import Icon form "react-native-vector-icons/FontAwesome5";

import tw from "twrnc";
import Welcome from "../components/Welcome";
const index = () => {
  return (
    <SafeAreaView style={tw` flex-1 bg-white   `}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerLeft: () => (
            <Pressable style={tw`pl-2`}>
              <Image
                source={require("../assets/icons/menu.png")}
                style={tw`  h-8 w-8 `}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable>
              <Icon
                name="user-circle"
                size={30}
                color="black"
                style={tw`pr-2`}
              />
            </Pressable>
          ),
          headerTitle: ""
        }}
      />

      <ScrollView
      style={tw`px-4`}
      >
      <Welcome />

      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
