import {Link, useNavigate} from "react-router-dom"
import { Grid, Text, Input, Flex, Button, Checkbox, InputGroup,InputLeftAddon, Toast, useToast, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, ModalOverlay  } from "@chakra-ui/react"


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


export default function Login({isOpen, onClose}){
    const { creds, execute} = useForm();
    const firstRef = useRef(null)
    const toast = useToast()
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleChange = (e) => {
        let { name, value } = e.target;
        execute(name, value);
        creds.password = firstRef.current.value
        console.log(creds, firstRef.current.value)
    }

    const handleSubmit = () =>{
        toast({
            title: 'Signing you in.',
            description: "Checking your credentials",
            status: 'info',
            duration: 1000,
            isClosable: true,
        })
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
    // <Input placeholder="example@email.com" name="email" onChange={handleChange}/>
    // <PasswordInput firstRef={firstRef} handleChange={handleChange}/>
    // <Button colorScheme="transparent" color="black" onClick={handleSubmit}>Sign in</Button>

    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayOne />)

    return (
        <>
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Custom backdrop filters!</Text>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}