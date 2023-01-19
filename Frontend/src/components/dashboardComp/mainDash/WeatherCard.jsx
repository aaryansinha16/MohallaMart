import { Avatar, Badge, Button, Flex, HStack, Progress, Stat, StatHelpText, StatLabel, StatNumber, Text, Tooltip, VStack } from '@chakra-ui/react'
// import { Tooltip } from 'chart.js'
import React, {useState, useEffect, memo} from 'react'
import {TiWeatherCloudy} from 'react-icons/ti'
import {RiWindyLine} from 'react-icons/ri'

const WeatherCard = () => {
    const [progress , setProgress] = useState(80)
    console.log("bottom level component render test, 'weather card'")
    let localData = JSON.parse(localStorage.getItem("userData")) || undefined
  return (
    <HStack color='black' w='100%' flexDir={{base:'column', md: 'row'}}  justifyContent='space-between' gap='10px' alignItems='center' pt='10px'>
        <VStack 
            w={{base:'100%', md:'50%'}} 
            borderRadius='25px' 
            boxShadow='lg'
            align='flex-start'
            py={6}
            px={8}
            spacing={4}
            bg='white'
            // h='400px'
            > 
                <Flex alignItems='center' justifyContent='center' gap='15px'>
                    <TiWeatherCloudy color='orange' fontSize='36px' style={{boxShadow:'.5px .5px 20px yellow', borderRadius:'50%', padding:'5px'}}/>
                    <VStack spacing={0} alignItems='flex-start' lineHeight='25px'>
                        <Text fontSize='18px' fontWeight='500'>Stats</Text>
                        <Text fontSize='16px'>{localData?.fName},Want to know more about yourself?</Text>
                    </VStack>
                </Flex>

                <VStack spacing={0} align='flex-start'>
                    <Text fontSize='36px' fontWeight='500'>27<Badge fontSize='14px' fontWeight='400'>Items ordered</Badge></Text>
                    <Text fontSize='16px'></Text>
                </VStack>

                <HStack w='100%' gap='10px' justifyContent='space-between' color='white' flexWrap='wrap'>
                    <Stat 
                        p={4}
                        w='33%'
                        borderRadius='12px'
                        bg='orange'
                        >
                        <StatLabel>Pressure</StatLabel>
                        <StatNumber><span style={{fontSize:'12px'}}>hPa</span></StatNumber>
                    </Stat>
                    <Stat 
                        p={4}
                        w='33%'
                        borderRadius='12px'
                        bg='orange'
                        >
                        <StatLabel>Visibility</StatLabel>
                        <StatNumber><span style={{fontSize:'12px'}}>Kms</span></StatNumber>
                    </Stat>
                    <Stat 
                        p={4}
                        w='33%'
                        borderRadius='12px'
                        bg='orange'
                        >
                        <StatLabel>Humidity</StatLabel>
                        <StatNumber><span style={{fontSize:'12px'}}>%</span></StatNumber>
                    </Stat>
                </HStack>

        </VStack>


        <VStack 
            bg='white'
            w={{base:'100%' ,md:'50%'}} 
            borderRadius='25px' 
            boxShadow='lg'
            align='flex-start'
            py={6}
            px={8}
            spacing={4}
            // h='400px'
            > 
                <Flex alignItems='center' justifyContent='center' gap='15px'>
                    <RiWindyLine  color='orange' fontSize='36px' style={{boxShadow:'.5px .5px 20px yellow', borderRadius:'50%', padding:'5px'}}/>
                    <VStack spacing={0} alignItems='flex-start' lineHeight='25px'>
                        <Text fontSize='18px' fontWeight='500'>Air Quality</Text>
                        <Text fontSize='16px'>PM 2.5 : <b></b></Text>
                    </VStack>
                </Flex>

                <VStack spacing={0} align='flex-start'>
                    <Text fontSize='36px' align='center' fontWeight='500'> <Badge colorScheme='yellow' fontSize='14px' fontWeight='400'>AQI</Badge></Text>
                    <Text fontSize='16px'></Text>
                </VStack>

                <VStack w='100%' gap='10px' alignItems='space-between' p={4} borderRadius={'15px'} boxShadow='xl'>
                    <HStack w='100%' justifyContent='space-between'>
                        <Text pl={3} pr={3} borderRadius="12px" bg='#61cacb' color='white'>Good</Text>
                        <Text pl={3} pr={3} borderRadius="12px" bg='#19283f' color='white'>Standard</Text>
                        <Text pl={3} pr={3} borderRadius="12px" bg='tomato' color='white'>Hazardous</Text>
                    </HStack>
                    <Tooltip label={`23AQI`} hasArrow>
                        <Progress value={300} min={0} max={500} colorScheme='green' borderRadius='12px' hasStripe isAnimated={true}/>
                    </Tooltip>
                </VStack>
            </VStack>

    </HStack>
  )
}

export default memo(WeatherCard)