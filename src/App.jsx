import React from "react";
import { Button, ChakraProvider, Text, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContaine from "./components/ItemListContainer/ItemListContainer"

function App() {

  return (
    <ChakraProvider>
      <Navbar />
      <ItemListContaine greeting={"Bienvenidos a mi Pagina"}/>
    </ChakraProvider>

  );
}

export default App;