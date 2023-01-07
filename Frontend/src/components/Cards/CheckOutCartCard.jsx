import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

export default function CheckOutCartCard({
    id,
    name, 
    brand,
    price,
    image
}) {

    const {handleDelete} = useContext(AppContext)

    return (
        <Box boxShadow='lg' w='90%' p={8} _hover={{boxShadow:'2xl', cursor:'pointer'}}>
            <Text textAlign='left' w='100%' fontSize='2xl' fontWeight='semibold'>Shippment from {brand}</Text>
            <Box w='100%' h='1px' bg='gray'></Box>
            <Flex justify='space-between' align='center'>
                <Flex w='50%' gap={9}>
                    <Image src="https://img.shop.com/Image/250000/251800/251872/products/1931667719__100x100__.jpg"  />
                    <VStack align='flex-start' p={3} spacing={3}>
                        <Text fontSize='xl' fontWeight='semibold'>{name}</Text>
                        <Text fontSize='3xl'>${price}</Text>
                    </VStack>
                </Flex>
                <VStack  w='25%' justify='center'>
                    <Button colorScheme='red' rounded='md' onClick={() => handleDelete(id)}>Remove</Button>
                </VStack>
            </Flex>
        </Box>
    )
};
