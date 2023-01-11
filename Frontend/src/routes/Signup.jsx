import {Link, useNavigate} from "react-router-dom"
import { Grid, Text, Input, Flex, Button, Checkbox, InputGroup,InputLeftAddon, useToast, HStack, PinInput, PinInputField, FormLabel  } from "@chakra-ui/react"

// Import Components
// import Navbar from "../components/Login/Navbar"
// import PasswordInput from "../components/Login/PasswordInput"
import useForm from "../Hooks/useForm"

// Import stylesheet
import style from "../styles/auth.module.css"

// Images import 
import { useRef } from "react"
// import BoxImage from "../components/Login/BoxImage"
import axios from "axios"
import { useDispatch } from "react-redux"
import { signupAction } from "../redux/auth/auth.actions"

export default function Signup(){
    const { creds, execute} = useForm();
    const firstRef = useRef(null)
    const toast = useToast()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        let { name, value } = e.target;
        execute(name, value);
        creds.password = firstRef.current.value
    }

    const handleSubmit = () =>{
        
        toast({
            title: 'Signing up.',
            description: "Creating your account.",
            status: 'info',
            duration: 1000,
            isClosable: true,
        })
        
        dispatch(signupAction(creds))
        .then((res) => {
            console.log(res, 'RESPONSE FOR SIGNUP')
            if(!res.description){
                toast({
                    title: 'Account created.',
                    description: res.message,
                    status: 'success',
                    duration: 6000,
                    isClosable: true,
                })
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

    return(
       <Grid templateColumns={{base:"1fr", sm:"1fr", md:"1fr", lg:"2fr 1.5fr"}}>
            <Grid  p={{base:"2", sm:"2",md:'2', lg:"10"}} h="100vh" templateRows="7vh 93vh" >
                <Navbar />
                <Flex className={style.form} flexDirection="column" gap={5} 
                    w={{base:"100%", sm:"100%", md:"80%", lg:"60%"}}  m="auto"  bgColor="white" 
                    px={{base:"10px", sm:"10px", md:"20px", lg:"50px"}}
                    py={{base:"30px", sm:"30px", md:"50px", lg:"50px"}}
                    position="relative"
                >
                    {/* <Text position="absolute" top={{base:"0", md:"-20px", lg:"-40px"}} left={{base:"10px", lg:"-60px"}} fontSize={{base:"1rem", md:"3rem"}} fontWeight="bold" >WELCOME ONBOARD!</Text> */}

                    <Text className={style.head}>Create an Account</Text>

                    <Grid gap="20px" templateColumns="repeat(2,1fr)" >
                        <Input placeholder="First name" name="fName" onChange={handleChange} />
                        <Input placeholder="Last name"  name="lName" onChange={handleChange} />
                    </Grid>
                        <Input placeholder="example@email.com" name="email" onChange={handleChange} />
                    <PasswordInput firstRef={firstRef} handleChange={handleChange}/>
                    <InputGroup>
                        <Input type='text' placeholder='Username' name="username" onChange={handleChange} />
                    </InputGroup>
                    <Button colorScheme="transparent" color="black" onClick={handleSubmit}>Signup</Button>
                    <Checkbox size='lg' defaultChecked>
                        Signup for offers & discounts
                    </Checkbox>
                    <Text >Already have an account? <Link to="/login">Sign in.</Link></Text>
                </Flex>
            </Grid>
           {/* <BoxImage /> */}
       </Grid>
    )
}