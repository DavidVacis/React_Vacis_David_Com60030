import { Flex,Text } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";

const CartWidget =() => {
    return(
        <Flex alignItems={"Center"}>
            <FaCartShopping size={30}/>
            <Text fontSize={15} marginLeft={5}>12</Text>
        </Flex>
    )

}

export default CartWidget;