import React from "react";
import { NativeBaseProvider, Box } from "native-base";

import Home from "./src/pages/Home";
import Header from "./src/componentes/Header";

export default function App() {
  return (
    <NativeBaseProvider>
      <Header></Header>
      <Home></Home>
    </NativeBaseProvider>
  );
}