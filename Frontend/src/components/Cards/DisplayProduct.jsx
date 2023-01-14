import { Button,chakra, Box, Flex, Image, useDisclosure,Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalOverlay, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { postCartAction } from '../../redux/cart/cart.actions'
import Login from '../../routes/Login'

let localData = JSON.parse(localStorage.getItem("userData")) || undefined

const DisplayProduct = ({
    _id,
    title, 
    price,
    src
}) => {
    title = title.slice(0, 14)

  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = useState(<OverlayOne />)

  const toast = useToast()
  const dispatch = useDispatch()
  
  function handleClick(){
    if(localData == undefined){
      onOpen()
      setOverlay(<OverlayOne/>)
    }
    else{
      dispatch((postCartAction(localData._id ,_id)))
      .then((res) => {
          console.log(res,'RESPONSE POST CART')
          // setRender((prev) => !prev)
          toast({
              title: res.message,
              variant: 'subtle',
              description: res.message,
              status: res.message.split(' ').includes("added") ? 'success' : 'info',
              duration: 5000,
              isClosable: true,
          })
      })
    }
  }

  return (
    <Flex
      bg="transparent"
      _dark={{ bg: "#3e3e3e" }}
    //   h='350px'
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        w="sm"
        mx="auto"
      >
        <Link to={`/products/${_id}`}>
          <Image src={src} 
              h='350px'
              w="full"
              rounded="lg"
              />
        </Link>

        <Box
          w={{ base: 56, md: 64 }}
          bg="#fdc92e"
        //   border='1px solid red'
          _dark={{ bg: "gray.800" }}
          mt={-10}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
        >
          <chakra.h3
            py={2}
            textAlign="center"
            fontWeight="bold"
            textTransform="uppercase"
            color="gray.800"
            _dark={{ color: "white" }}
            letterSpacing={1}
          >
            {title}
          </chakra.h3>

          <Flex
            alignItems="center"
            justifyContent="space-between"
            py={2}
            px={3}
            bg="gray.200"
            _dark={{ bg: "gray.700" }}
          >
            <chakra.span
              fontWeight="bold"
              color="gray.800"
              _dark={{ color: "gray.200" }}
            >
              ${price}
            </chakra.span>
            <chakra.button
              bg="gray.800"
              fontSize="xs"
              fontWeight="bold"
              color="white"
              px={2}
              py={1}
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: "gray.700",
                _dark: { bg: "gray.600" },
              }}
              _focus={{
                bg: "gray.700",
                _dark: { bg: "gray.600" },
                outline: "none",
              }}
              onClick={handleClick}
            >
              Add to cart
            </chakra.button>
          </Flex>
        </Box>
        <Login isOpen={isOpen} onClose={onClose}/> 
      </Flex>
    </Flex>
  )
}

export default DisplayProduct
