import {Link, useNavigate} from "react-router-dom"
import { Grid, Text, Input, Flex, Button, Checkbox, InputGroup,InputLeftAddon, Toast, useToast, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, ModalOverlay, keyframes, usePrefersReducedMotion, VStack, FormLabel  } from "@chakra-ui/react"


// Import Components
import useForm from "../Hooks/useForm"

// Import stylesheet
import style from "../styles/auth.module.css"

import { useEffect, useState } from "react"
// import BoxImage from "../components/Login/BoxImage"
// import Errordiv from "../components/Login/Errordiv"
import {useRef} from 'react'
import { useDispatch } from "react-redux"
import { loginAction } from "../redux/auth/auth.actions"
import PasswordInput from "../components/inputComps/PasswordInput"


const changeCol = keyframes`
  from { backdrop-filter:blur(0px) hue-rotate(0deg);  }
  to { backdrop-filter:blur(8px) hue-rotate(90deg);}
`


export default function Signup({isOpen, onClose}){
    const { creds, execute} = useForm();
    const firstRef = useRef(null)
    const toast = useToast()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const preferReducedMotion = usePrefersReducedMotion()
    const animation = preferReducedMotion
    ? undefined
    : `${changeCol} 1 10s linear`


    const handleChange = (e) => {
        let { name, value } = e.target;
        execute(name, value);
        creds.password = firstRef.current.value
        // console.log(creds, firstRef.current.value)
    }

    const handleSubmit = () =>{
        toast({
            title: 'Signing you in.',
            description: "Checking your credentials",
            status: 'info',
            duration: 1000,
            isClosable: true,
        })
        console.log('CREDS',creds);
        dispatch(loginAction(creds))
        .then((res) => {
            console.log(res, 'RESPONSE FOR LOGIN PAGE')
            if(!res.description){
                toast({
                    title: 'Login Successful',
                    description: "Hooray! You have successfully logged in.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
                onClose()
                // navigate("/products")
            }
            else{
                toast({
                    title: res.message,
                    description: res.description,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            }
        })
    }
    // <PasswordInput firstRef={firstRef} handleChange={handleChange}/>
    // <Button colorScheme="transparent" color="black" onClick={handleSubmit}>Sign in</Button>
    
    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(8px) hue-rotate(90deg)'
          transition='2s linear'
          animation={animation}
          />
          )
          
          // const { isOpen, onOpen, onClose } = useDisclosure()
          const [overlay, setOverlay] = useState(<OverlayOne />)
          
          return (
            <>
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent 
              boxShadow='2xl'
              borderRadius='40px'
              px={3}
              bg='#ffe058'
              color='#816101'
              >
              <ModalHeader fontSize='26px' fontFamily='mono'>Login</ModalHeader>
              <ModalCloseButton mr='20px' mt='10px'/>
              <ModalBody>
                <VStack
                  w='100%'
                  m='auto'
                  spacing={3}
                >
                  <VStack w='100%' alignItems='flex-start' spacing={-2}>
                    <FormLabel>Email: </FormLabel>
                    <Input 
                      placeholder="example@email.com" 
                      name="email" 
                      onChange={handleChange}
                      bg='green.300'
                      colorScheme='yellow'
                      color='white'
                      borderColor='transparent'
                      _placeholder={{color:'gray.100'}}
                      focusBorderColor='transparent'
                      _hover={{focusBorderColor:'transparent'}}
                      />
                  </VStack>
                  <VStack w='100%' alignItems='flex-start' spacing={-2}>
                    <FormLabel>Password:</FormLabel>
                    <PasswordInput firstRef={firstRef} handleChange={handleChange} />
                  </VStack>
                </VStack>
                <VStack alignItems='center' w='100%' mt='10px'>
                  <Link to='/forgot-password'><Text textAlign='center' _hover={{color:'white'}}>Forgot your password?</Text></Link>
                </VStack>
              </ModalBody>
              <ModalFooter as={Flex} justifyContent='center' flexDir='column' alignItems='center' pt='5px'>
                <Button boxShadow='2xl' onClick={handleSubmit} w='50%' colorScheme='green' variant='solid' bg='green.300' color='white'>Login</Button>

                <Flex justifyContent='center' w='100%' mt='10px'>
                  <Text>Don't have an account? </Text>
                  <Text fontWeight='bold' _hover={{color:'white'}}>{" "}Create new account!</Text>
                </Flex>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}