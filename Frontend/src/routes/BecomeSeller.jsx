import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {useRef, useState} from 'react'

export default function BecomeSeller({props}) {

  const storeRef = useRef(null)
  const regRef = useRef(null)
  const toast = useToast()

  const handleSeller = () => {
    
  }

  return (
    <>
    {/* <Navbar props={props}/> */}
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Become a Seller Today!</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            1-step setup! ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Store Name</FormLabel>
              <Input ref={storeRef} type="text" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Registration No.</FormLabel>
              <Input ref={regRef} type="text" />
            </FormControl>
            <Stack spacing={10}>
              <Button
              onClick={handleSeller}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Become Seller
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    {/* <Footer/> */}
    </>
  );
}