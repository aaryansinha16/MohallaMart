import { Box, Flex, HStack, Image, Text, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Downarrow from '../../Resources/downarrow.svg'
import Dorito from '../../Resources/dorito.png'
import {Navigate, useNavigate, Link} from 'react-router-dom'
import ExploreSwiper from './ExploreSwiper'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {MdComputer, MdOutlineFastfood} from 'react-icons/md'
import { TbDeviceGamepad2 } from 'react-icons/tb'
import Wave from '../../Resources/wave.svg'
import { useDispatch } from 'react-redux'
import { getProductsAction } from '../../redux/products/product.action'
import { useState } from 'react'

const Explore = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const toast = useToast()
    const [products, setProducts] = useState([])

    useEffect(() => {
        dispatch(getProductsAction())
        .then((res) => {
            // console.log(res, 'RESPONSE ALL PRODUCTS PAGE')
            setProducts(res.prod)
            toast({
                title: "Products Fetched",
                variant: 'subtle',
                description: res.message,
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
        })
        // console.log('test1')
    }, [])

  return (
    <Box
        w='100%'
        m='auto'
        borderRadius='100px 100px 0 0'
        bg='#00957b'
        mt='140px'
        pb='100px'
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
                transform: 'rotate(45deg) scale(1.2)'
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
            zIndex='10'
            >
            <Image className='productImg' src={Dorito} w='33%' h={{base:'150px',md:'350px' ,lg:'400px',xl:'500px'}}/>
            <Image className='productImg' src={Dorito} w='33%' h={{base:'180px',md:'400px' ,lg:'450px',xl:'550px'}} zIndex='10'/>
            <Image className='productImg' src={Dorito} w='33%' h={{base:'150px',md:'350px' ,lg:'400px',xl:'500px'}}/>
        </Flex>
            <Box w='100%' bg='#00957b' h={{base:'30px',md:'80px'}} position='relative' top={{base:'-30px', md:'-70px'}}></Box>

        <Box 
            className='blobL'
            borderRadius='70% 30% 30% 64% / 60% 40% 60% 40%' 
            w={{base:'100px',md:'300px',lg:'400px'}} 
            h={{base:'100px',md:'300px',lg:'400px'}} 
            bg='#007A65'
            transform={{base:'translate(-60px, 50px)',md:'translate(-250px, -140px)'}}
            zIndex='0'
            position='absolute'></Box>
        {/* <Image src={Wave} w='100%' position='absolute'/> */}
        <Box 
            className='blobR'
            borderRadius='70% 30% 30% 64% / 60% 40% 60% 40%' 
            w={{base:'100px',md:'300px',lg:'400px'}} 
            h={{base:'100px',md:'300px',lg:'400px'}} 
            bg='#007A65'
            right='0%'
            transform={{base:'translate(40px , 360px)',md:'translate(240px, 80px)'}}
            zIndex='0'
            filter='brightness(1.5)'
            position='absolute'></Box>

        <Text
            color='white'
            fontSize={{base:'44px', md:'54px'}}
            textShadow= "-6px 5px 0 #117666"
            fontFamily='Modak'
            lineHeight='60px'
            w={{base:'100%', sm:'90%', md:'40%'}}
            textAlign='center'
            m='auto'
        >
            TREND OF THE DAY!
        </Text>    
        <ExploreSwiper products={products}/>

        {/* //? CODE FOR MOVING ITEMS ANIMATION */}
        <Box
            w='100%'
            bg='#fdc92e'
            >
            <Flex 
                className="moving-text" 
                fontFamily='Titan One' 
                color='#816101' 
                fontSize={{base:'24px', md:'44px', xl:'70px'}} 
                paddingTop={{base:'15px', md:'20px', xl:'10px'}}
                paddingBottom={{base:'15px', md:'20px', xl:'10px'}}
                // gap={{base:'0px',md:'70px'}} 
                w='100%' 
                m='auto' 
                mt='100px'
                justifyContent='center'
                // pt='70px'
                >
                <Flex alignItems='center' w='33%' justifyContent='center'>
                    <MdComputer />
                    <Text>Laptops</Text>
                </Flex>
                <Flex alignItems='center' w='33%' justifyContent='center'>
                    <MdOutlineFastfood />
                    <Text>Food</Text>
                </Flex>
                <Flex alignItems='center' w='33%' justifyContent='center'>
                    <TbDeviceGamepad2 />
                    <Text>Games</Text>
                </Flex>
                {/* <Text lineHeight='70px' >TRY NOW</Text> */}
            </Flex>
        </Box>

    </Box>
  )
}

export default Explore
