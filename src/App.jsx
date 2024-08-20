import { useState } from "react";
import { Button, ChakraProvider, Text, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const [count, setCount] = useState(0);
  const handleRemoveItem = () => {
    setCount(count -1)
  };
  const handleAddItem = () => {
    setCount(count +1)
  };
  return (
    <ChakraProvider>
      <Navbar />
      <Flex>
        <Button onClick={handleRemoveItem}>-</Button>
        <Text>{count}</Text>
        <Button onClick={handleAddItem}>+</Button>
      </Flex>

      <Flex flexDirection={"column"}>
        <ItemListContainer label="Bienvenidos a mi pagina"/>
        <ItemListContainer label="Comprar"/>
      </Flex>
    </ChakraProvider>
  );
}

export default App;