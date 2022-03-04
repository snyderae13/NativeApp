import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import Flex from "./components/FlexContainer";
import Nav from "./components/Nav";

export default function App() {
  return (
    <NativeBaseProvider>
      <Nav/>
    </NativeBaseProvider>
  );
}
