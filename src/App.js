import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import MoviesList from "./views/Movies/List";
import Navbar from "./components/Navbar";
import "antd/dist/antd.css";
import FontContext from "./contexts/FontContext";
import { FontProvider } from "./contexts/FontProvider";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <FontProvider>
        <Navbar />
        <Box w="100%" h="100%" minH="100vh" bg="#2C3949" p="8" mt="50px">
          <MoviesList />
        </Box>
      </FontProvider>
    </ChakraProvider>
  );
}

export default App;
