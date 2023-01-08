import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Downarrow from '../../Resources/downarrow.svg'
import Dorito from '../../Resources/dorito.png'
import {Navigate, useNavigate, Link} from 'react-router-dom'
import ExploreSwiper from './ExploreSwiper'

const Explore = () => {
    const navigate = useNavigate()
    // function handleScroll(){
    //     navigate('/#explore')
    // }
  return (
    <Box
        w='100%'
        m='auto'
        borderRadius='100px 100px 0 0'
        bg='#00957b'
        mt='140px'
        pb='300px'
    >
        <a href='#explore' className='test'>
        <Box
            bg='#0caf96'
            w='100px'
            h='100px'
            borderRadius='20px'
            transform='rotate(45deg)'
            position='relative'
            left={{base:'37%' , sm:'42%',md:'45%', lg: '46%'}}
            top='-50px'
            transition='.2s ease'
            _hover={{
                transform: 'rotate(45deg) scale(1.2)',
                cursor:'pointer'
            }}
            // borderLeft='60px solid transparent'
            // borderRight= '60px solid transparent'
            // borderTop='60px solid #0caf96'
        > 
            <Text color='white' fontFamily='sans-serif' position='absolute' transform='rotate(-45deg) translate(-20px,15px)'>Explore More</Text>
            <Image src={Downarrow} w='70px' transform='rotate(-45deg) translate(0px, 35px)'/>
        </Box>
        </a>

        <Text
            color='white'
            fontSize={{base:'44px', md:'54px'}}
            textShadow= "-7px 5px 0 #0e8c78"
            fontFamily='Modak'
            lineHeight='60px'
            w={{base:'100%', sm:'90%', md:'40%'}}
            textAlign='center'
            m='auto'
            id='explore'
        >
            DISCOVER YOUR FAVOURITE FLAVOURS
        </Text>

        <HStack 
                w='80%'
                m='auto'
                mt='20px'
                justifyContent='center'
            >
            <Text
                w={{base:'100%',md:'50%'}}
                fontSize='18px'
                textAlign='center'
                color='white'
            >Try some exotic flavours or delicious toppings. We have collocted some amazing products from around the world
            </Text>
        </HStack>

        <Flex
            w={{base:'90%',md:'80%'}}
            m='auto'
            mt={{base:'50px',md:'100px'}}
            borderRadius={{base:'60px 60px 0px 0px',md:'150px 150px 5px 5px'}}
            h={{base:'160px',md:'350px',lg:'400px',xl:'500px'}}
            bg='#01816d'
            boxShadow='#046a5a 0px 30px 20px -12px inset, #046a5a 0px 18px 36px -18px inset'
            justifyContent='space-around'
            alignItems='flex-end'
        >
            <Image className='productImg' src={Dorito} w='33%' h={{base:'150px',md:'350px' ,lg:'400px',xl:'500px'}}/>
            <Image className='productImg' src={Dorito} w='33%' h={{base:'180px',md:'400px' ,lg:'450px',xl:'550px'}} zIndex='10'/>
            <Image className='productImg' src={Dorito} w='33%' h={{base:'150px',md:'350px' ,lg:'400px',xl:'500px'}}/>
        </Flex>
            <Box w='100%' bg='#00957b' h={{base:'30px',md:'70px'}} position='relative' top={{base:'-30px', md:'-70px'}}></Box>


        <Text
            color='white'
            fontSize={{base:'44px', md:'54px'}}
            textShadow= "-7px 5px 0 #0e8c78"
            fontFamily='Modak'
            lineHeight='60px'
            w={{base:'100%', sm:'90%', md:'40%'}}
            textAlign='center'
            m='auto'
        >
            TREND OF THE DAY!
        </Text>    
        <ExploreSwiper />

    </Box>
  )
}

export default Explore
