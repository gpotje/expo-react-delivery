import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes'
import CartProvider from './src/context/CartContext'

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
      <CartProvider>
          <StatusBar backgroundColor="#Fafafa" />
          <Routes />
      </CartProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}