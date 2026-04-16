import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
      <Tabs
          screenOptions={{
            headerShown: false,
          }}>
        <Tabs.Screen
            name="login"
            options={{
                title: 'Login',
            }}
        />
        <Tabs.Screen
            name="signup"
            options={{
                title: 'Signup',
            }}
        />
      </Tabs>
  );
}
