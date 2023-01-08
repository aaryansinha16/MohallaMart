import { Box, Button, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Dorito from '../../Resources/dorito.png'
import Mobile from '../../Resources/mobile.png'
import Veg from '../../Resources/vegetable.png'
import Jacket from '../../Resources/jacket.png'
import Books from '../../Resources/books.png'

const TopSection = () => {
  return (
    <Flex
        w='80%'
        bg='transparent'
        justifyContent='space-between'
        alignItems='center'
        m='auto'
        mt='50px'
        flexDir={{base:'column', md: 'row'}}
        gap={{base:'40px', md:'10px'}}
    >
        <VStack w={{base: '100%', md: '50%'}} alignItems='flex-start' textAlign='left'>
            <Text 
                color='white'
                fontSize={{base:'54px', md:'84px'}}
                textShadow= "-7px 5px 0 #0e8c78"
                fontFamily='Modak'
                lineHeight='80px'
                w='80%'
                textAlign='left'
                >
                SHOP WITH NO LIMITS
            </Text>

            <Flex justifyContent='space-between' alignItems='center' w='100%' pt='30px'>
                <Text fontSize='18px' color='white'>When you're on the go and don't have the time to cook, snacks are the perfect solution. Always be prepared for mid day hunger.</Text>
            </Flex>

            <HStack pt='30px' justifyContent='space-between' alignItems='center' w={{base:'100%', lg:'70%'}}>
                <Button size='lg' fontSize='20px' borderRadius='20px' color='brown' colorScheme='yellow'>Snacking Now</Button>
                <Button size='lg' fontSize='20px' borderRadius='20px' bg='transparent' borderColor='yellow' color='gold' border='2px' colorScheme='yellow' _hover={{color:'brown', borderColor: 'yellow', bgColor:'#ecc94b'}}>Shop Later</Button>
            </HStack>
        </VStack>

        <HStack w={{base: '100%', md: '60%', lg:'50%'}} className='main-product' justifyContent='space-between' borderRadius='45%'>
            <VStack w={{md:'20%',lg:'25%'}}>
                <Image className='sideMainImg' src={Mobile} w='100%'/>
                <Image className='sideMainImg' src={Veg} w='100%'/>
            </VStack>
            <Image className='mainImg' src={Dorito} w={{md: '60%',lg:'50%'}}/>
            <VStack w={{md:'20%',lg:'25%'}}>
                <Image className='sideMainImg' src={Jacket} w='100%'/>
                <Image className='sideMainImg' src={Books} w='100%'/>
            </VStack>
        </HStack>
    </Flex>
  )
}

export default TopSection
