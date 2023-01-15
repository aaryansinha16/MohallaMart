import {Link, useNavigate} from "react-router-dom"
import { Grid, Text, Input, Flex, Button, Checkbox, InputGroup,InputLeftAddon, Toast, useToast, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, ModalOverlay, keyframes, usePrefersReducedMotion, VStack, FormLabel, HStack  } from "@chakra-ui/react"


// Import Components
import useForm from "../Hooks/useForm"

// Import stylesheet
import style from "../styles/auth.module.css"

import { useEffect, useState } from "react"
// import BoxImage from "../components/Login/BoxImage"
// import Errordiv from "../components/Login/Errordiv"
import {useRef} from 'react'
import { useDispatch } from "react-redux"
// import { loginAction, signupAction } from "../redux/auth/auth.actions"
// import PasswordInput from "../components/inputComps/PasswordInput"
// import Signup from "./Signup"
import axios from "axios"
import Login from "../routes/Login"


const changeCol = keyframes`
  from { backdrop-filter:blur(0px) hue-rotate(0deg);  }
  to { backdrop-filter:blur(8px) hue-rotate(90deg);}
`


export default function BecomeSeller({isOpen, onClose, drMod}){
    const storeRef = useRef(null)
    const firstRef = useRef(null)
    const toast = useToast()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const preferReducedMotion = usePrefersReducedMotion()
    const animation = preferReducedMotion
    ? undefined
    : `${changeCol} 1 10s linear`

    const OverlayOne = () => (
        <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )

    const [overlay, setOverlay] = useState(<OverlayOne />)

    async function becomeSeller(userId, storeName, user){
        let data = await axios.post('https://helpful-tan-cricket.cyclic.app/seller/become', {userId, storeName, user})
        return data.data
    }

    const handleSubmit = () =>{
        let localData = JSON.parse(localStorage.getItem("userData")) || undefined

        if(localData == undefined){
            toast({
                title:'Please Login first',
                description: "You have to login before becomming a seller",
                status: 'warning',
                duration: 5000,
                isClosable: true
            })
        } 
        else{
            if(storeRef.current.value == "") {
                toast({
                    title: 'Enter a valid store name',
                    duration: 4000,
                    isClosable: true,
                    status: 'warning'
                })
                return
            }
              becomeSeller(localData._id, storeRef.current.value, localData)
              .then((res) => {
                console.log(res, 'RESPONSE ON BECOMING SLLER')
                localStorage.setItem("userData", JSON.stringify(res.user))
                toast({
                    title: 'Store Created!',
                    description: "Congrats!, your store is live!!",
                    status: 'success',
                    isClosable: 'true',
                    duration: 5000
                })
                onClose()
              })
        }
    }

    // <PasswordInput firstRef={firstRef} handleChange={handleChange}/>
    // <Button colorScheme="transparent" color="black" onClick={handleSubmit}>Sign in</Button>
        
        return (
        <>
        <Modal isCentered isOpen={isOpen && drMod} onClose={onClose}>
        {overlay}
        <ModalContent 
            transition='1s linear'
            boxShadow='2xl'
            borderRadius='40px'
            px={3}
            bg='#ffe058'
            color='#816101'
            >
            <ModalHeader fontSize='26px' fontFamily='mono'>Become A Merchant</ModalHeader>
            <ModalCloseButton mr='20px' mt='10px'/>
            <ModalBody pb={8}>
                <VStack
                    w='100%'
                    m='auto'
                    spacing={0}
                >
                    <VStack w='100%' alignItems='flex-start' spacing={-2} mt={-2}>
                        <FormLabel>Store Name: </FormLabel>
                        <Input 
                        ref={storeRef}
                        placeholder="Enter Store name" 
                        name="text" 
                        bg='green.300'
                        colorScheme='yellow'
                        color='white'
                        borderColor='transparent'
                        _placeholder={{color:'gray.100'}}
                        focusBorderColor='transparent'
                        _hover={{focusBorderColor:'transparent'}}
                        />
                    </VStack>
                </VStack>
            </ModalBody>
            <ModalFooter as={Flex} justifyContent='center' flexDir='column' alignItems='center' pt='5px'>
                <Button boxShadow='2xl' onClick={handleSubmit} w='50%' colorScheme='green' variant='solid' bg='green.300' color='white'>Become Seller</Button>
            </ModalFooter>
            {/* <Login isOpen={isOpen} onClose={onClose} /> */}
        </ModalContent>
        
        </Modal>
    </>
    )
}