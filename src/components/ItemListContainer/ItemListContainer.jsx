import { Box, Center } from "@chakra-ui/react";

const ItemListContainer = ({greeting}) => {
    return (
        <Box fontSize={40} textAlign={"center"} margin={10}>
            {greeting}
        </Box>
    )
};

export default ItemListContainer