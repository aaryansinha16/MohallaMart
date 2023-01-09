import { Grid , Flex, Text, Input, Button, Img, Box, VStack, Image } from "@chakra-ui/react"

import logo from "../Resources/blackCircle.png"
import CurlyArrow from '../Resources/curlyArrow.png'
import CoinSound from '../Resources/coinSound.wav'
import {useSound} from 'use-sound'



import { SlSocialTwitter, SlSocialLinkedin, SlSocialInstagram, SlSocialFacebook } from "react-icons/sl"

export default function Footer(){
    const [play, { stop }] = useSound(CoinSound)
    return(
        <Box
            className="home"
            w='100%'
            m='auto'
            // bg='#0daa90' 
            justifyContent='space-between'
            alignItems='center'         
        >
            <Box
                w='100%'
                h='70px'
                bg='#00957b'
                borderRadius='0 0 100px 100px'
            ></Box>

            <Text
                color='white'
                fontSize={{base:'44px', md:'54px'}}
                textShadow= "-7px 5px 0 #0e8c78"
                fontFamily='Modak'
                lineHeight='60px'
                w={{base:'100%', sm:'90%', md:'50%'}}
                textAlign='center'
                m='auto'
                mt='50px'
                mb='30px'
            >
                WHAT ARE YOU WAITING FOR? TRY MOHALLA MART NOW!
            </Text>

            <Flex
                zIndex='10'
                w='fit-content'
                position='relative'
                fontFamily='Titan One'
                fontSize={{base:'44px',md:'84px'}}
                padding='0px 50px 0px 50px'
                color='#816101'
                textAlign='center'
                bg='#fdc92e'
                borderRadius='60px'
                top={{base:'0px',lg:'20px'}}
                m='auto'
                alignItems='center'
                transition='.6s ease'
                _hover={{
                    transform:'scale(1.1)'
                }}
                >
                <Text w={{base:'220px', md:'430px'}}>TRY NOW</Text>
            </Flex>
            <Flex 
                className="moving-text" 
                fontFamily='Modak' 
                color='#00957b' 
                fontSize={{base:'24px', md:'64px', xl:'70px'}} 
                gap={{base:'20px',md:'70px'}} 
                w='100%' 
                m='auto' 
                mt='-70px'
                justifyContent='center'
                // pt='70px'
                >
                <Text lineHeight='70px' >TRY NOW</Text>
                <Text lineHeight='70px' >TRY NOW</Text>
                <Text lineHeight='70px' >TRY NOW</Text>
                {/* <Text lineHeight='70px' >TRY NOW</Text> */}
            </Flex>

            <Text
                color='white'
                fontSize={{base:'44px', md:'64px'}}
                textShadow= "-7px 5px 0 #0e8c78"
                fontFamily='Titan One'
                // lineHeight='100px'
                w={{base:'100%', sm:'90%', md:'50%'}}
                textAlign='center'
                m='auto'
                mt='70px'
                display={{base:'block', md:'none'}}
            >
                MOHALLAMART
            </Text>

            <Flex
                justifyContent='center'
                gap='1px'
                fontSize='64px'
                fontFamily='Titan One'
                color='white'
                textShadow= "-7px 5px 0 #0e8c78"
                mt='70px'
                pr='90px'
                display={{base:'none', md:'flex'}}
            >
                <Flex display={{base:'none', md:'flex'}} flexDir='column' alignItems='flex-end' position='relative' w='fit-content' left='-10px'>
                    <Text color='gold' fontSize='18px' fontFamily='cursive' transform='rotate(-20deg)'>Hover me!</Text>
                    <Image src={CurlyArrow} w='50px' />
                </Flex>
                <Text onMouseEnter={() => play()} onMouseLeave={() => stop()} className="brand" zIndex='12'>M</Text>
                <Text onMouseEnter={() => play()} onMouseLeave={() => stop()} className="brand" zIndex='11'>O</Text>
                <Text onMouseEnter={() => play()} onMouseLeave={() => stop()} className="brand" zIndex='10'>H</Text>
                <Text onMouseEnter={() => play()} onMouseLeave={() => stop()} className="brand" zIndex='9'>A</Text>
                <Text onMouseEnter={() => play()} onMouseLeave={() => stop()} className="brand" zIndex='8'>L</Text>
                <Text onMouseEnter={() => play()} onMouseLeave={() => stop()} className="brand" zIndex='7'>L</Text>
                <Text onMouseEnter={() => play()} onMouseLeave={() => stop()} className="brand" zIndex='6'>A</Text>
                <Text onMouseEnter={() => play()} onMouseLeave={() => stop()} className="brand" zIndex='5'>M</Text>
                <Text onMouseEnter={() => play()} onMouseLeave={() => stop()} className="brand" zIndex='4'>A</Text>
                <Text onMouseEnter={() => play()} onMouseLeave={() => stop()} className="brand" zIndex='3'>R</Text>
                <Text onMouseEnter={() => play()} onMouseLeave={() => stop()} className="brand" zIndex='2'>T</Text>
            </Flex>

            <Flex 
                color='white'
                justifyContent={{base:'center',lg:'space-between'}}
                w='80%'
                m='auto'
                pb='10px'
                textAlign='center'
                mt='70px'
                fontFamily='sans-serif'
            >
                <Text w='250px' display={{base:'none', lg:'block'}}>Terms & Agreements</Text>
                <Text w='250px'>&copy;2023 MohallaMart All Rights Reserved</Text>
                <Text w='250px' display={{base:'none', lg:'block'}}>Privacy Policy</Text>
            </Flex>

        </Box>
    )
}