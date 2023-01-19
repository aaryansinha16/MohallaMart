import { CalendarIcon } from '@chakra-ui/icons'
import { Badge, Button, Divider, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { memo } from 'react'
import { BsFillSunFill } from 'react-icons/bs'
import { TiWeatherCloudy } from 'react-icons/ti'
import Profile from '../../Resources/avatar.jpg'

const TabRight = ({tab}) => {
    console.log('right tab render')
    let date = new Date().toDateString().replace(' ', ',')
    let localData = JSON.parse(localStorage.getItem("userData")) || undefined
  return (
    <VStack
        color='white'
        boxShadow='2xl'
        w={tab == 'menu'? '100%':'100%'}
        h='95vh' 
        borderRadius='25px' 
        // bg='#FAFAEB' 
        pt={9}
        pl={{base: 2, xl: 6}}
        pr={{base: 2, xl: 6}}
        bgColor='rgba(250, 250, 145, .20)' 
        style={{backdropFilter: 'blur(5px)'}} 
        >
            <HStack w={{base:'80%', xl:'100%'}} justifyContent='space-between'>
                <VStack alignItems='flex-start' spacing={0} lineHeight='26px'>
                    <Text fontSize='20px' fontWeight='500'>{date}</Text>
                    <Text>Menu</Text>
                </VStack>

                <Text fontSize={{base:'36px', xl:'46px'}} fontWeight='500' color='orange'>22°C</Text>
            </HStack>
            <Divider orientation='horizontal' w='100%' borderColor='gray.400' borderWidth='0.5px' bg='gray.400' opacity='0.3'/>

            <Flex alignItems='center' justifyContent='center' gap={{base:'5px', xl:'15px'}} w='100%'  bg='#19283f' color='white' p={3} borderRadius='25px'>
                <Image src={Profile} borderRadius='full'/>
            </Flex>

            <VStack w='100%' alignItems='flex-end' pt='15px'>
                    <Text w='100%' textAlign='center' fontSize={{base:'18px',xl:'26px'}} fontWeight='500'>{localData != undefined ? localData.fName + " " + localData.lName : "Detective User"}</Text>
                    <VStack w='100%' pt='10px' pb='20px'>
                            <HStack alignItems='center' justifyContent='space-between' w='100%' bg='white' borderRadius='25px' p={3}>
                                <Flex alignItems='center' justifyContent='center'  gap='15px' w='fit-content' color='black'  >
                                <TiWeatherCloudy color='orange' fontSize='36px' style={{ borderRadius:'50%'}}/>
                                <VStack spacing={0} alignItems='flex-start' lineHeight='20px' >
                                        <Text fontSize='12px' opacity='0.5' fontWeight='500' alignItems='center'>November 10</Text>
                                        <Text fontSize='16px' fontWeight='500'>Cloudy</Text>
                                </VStack>
                                </Flex>
                                <Text color='orange' fontSize={{base:'18px', xl:'22px'}}>26/29</Text>
                            </HStack>
                            <HStack alignItems='center' justifyContent='space-between' w='100%' bg='white' borderRadius='25px' p={3}>
                                <Flex alignItems='center' justifyContent='center'  gap='15px' w='fit-content' color='black'  >
                                <BsFillSunFill color='orange' fontSize='36px' style={{ borderRadius:'50%'}}/>
                                <VStack spacing={0} alignItems='flex-start' lineHeight='20px' >
                                        <Text fontSize='12px' opacity='0.5' fontWeight='500' alignItems='center'>November 11</Text>
                                        <Text fontSize='16px' fontWeight='500'>Sunny</Text>
                                </VStack>
                                </Flex>
                                <Text color='orange' fontSize={{base:'18px', xl:'22px'}}>26/29</Text>
                            </HStack>
                    </VStack>
                    <Button bg='#f97f29' colorScheme='orange' fontSize='14px' p={4} color='white' borderRadius='15px' leftIcon={<CalendarIcon/>} fontWeight='400'>Next 5 Days</Button>

            </VStack>
        </VStack>
  )
}

export default memo(TabRight)