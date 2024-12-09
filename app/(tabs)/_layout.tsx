import {Tabs} from 'expo-router';
import React from 'react';
import {View} from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => (<View style={{backgroundColor: 'red'}}></View>)
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
        }}
      />
    </Tabs>
  );
}
