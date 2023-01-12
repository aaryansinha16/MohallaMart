import { Tab, TabList, TabPanel, TabPanels, Tabs, VStack, Box, Heading, Text, useToast, Button, HStack, Divider, Flex, Badge, Image } from '@chakra-ui/react'
import React, {useState, useEffect, memo} from 'react'
import { AiOutlineHome, AiOutlineTeam } from 'react-icons/ai'
import { BiBarChartSquare, BiTimeFive } from 'react-icons/bi'
import { CgBriefcase } from 'react-icons/cg'
import { HiOutlineIdentification, HiOutlineLocationMarker } from 'react-icons/hi'
import { FiPieChart } from 'react-icons/fi'
import MainDash from './mainDash/MainDash'
import {BsCalendarDate, BsFillSunFill} from 'react-icons/bs'
import {MdOutlineSettings} from 'react-icons/md'
import { TiWeatherCloudy } from 'react-icons/ti'
import { CalendarIcon } from '@chakra-ui/icons'
import TabRight from './TabRight'
// import ConstructionImg from '../assets/underCons.jpg'

const RespDash = () => {
   console.log("Responsive render test")

   const [currData, setCurrData] = useState([])
   const [futureData ,setFutureData] = useState([])
   const [pollData, setPollData] = useState([])

   return (
    <Tabs isLazy defaultIndex={0} bg='transparent' display={{base:'block', md:'none'}}>
        <TabPanels h='92vh'>
            <TabPanel>
                <Box
                    pl={2} 
                    pr={2} 
                    pb={2} 
                    pt={2} 
                    w='100%' 
                    h='90vh'  
                    bgColor='rgba(255, 255, 255, .20)' 
                    borderRadius='2xl' 
                    style={{backdropFilter: 'blur(5px)'}} 
                    // boxShadow='lg' 
                    m='auto'
                    overflowY='scroll' >
                    <MainDash currData={currData} futureData={futureData} pollData={pollData}/>
                </Box>
            </TabPanel>
            <TabPanel>
                <Heading pt='40px' textAlign='center'>Under Construction</Heading>
                {/* <Image
                    boxSize='100%'
                    mt='100px'
                    fit='cover'
                    src={ConstructionImg}
                /> */}
            </TabPanel>
            <TabPanel>
                <Heading pt='40px' textAlign='center'>Under Construction</Heading>
                {/* <Image
                    boxSize='100%'
                    mt='100px'
                    fit='cover'
                    src={ConstructionImg}
                /> */}
            </TabPanel>
            <TabPanel>
                <Heading pt='40px' textAlign='center'>Under Construction</Heading>
                {/* <Image
                    boxSize='100%'
                    mt='100px'
                    fit='cover'
                    src={ConstructionImg}
                /> */}
            </TabPanel>
            <TabPanel>
                <Heading pt='40px' textAlign='center'>Under Construction</Heading>
                {/* <Image
                    boxSize='100%'
                    mt='100px'
                    fit='cover'
                    src={ConstructionImg}
                /> */}
            </TabPanel>
        </TabPanels>

        <TabList 
            w='100%' 
            m='auto' 
            h='8vh' 
            px={{base:'30px', sm:'100px'}}
            justifyContent='space-between'
            bgColor='rgba(255, 255, 255, .35)' 
            // bgColor='red'
            style={{backdropFilter: 'blur(5px)'}} 
            boxShadow='2xl' >
            <Tab
                transition="0.2s ease-out"
                color='black'
                _hover={{
                   background:  "orange",
                   opacity: "0.9",
                   transition: "0.2s ease-out",
                   color:'white'
                }}
                _selected={{bg: '#f97f29', color: 'white',  boxShadow: '2px 2px 25px orange'}}
                borderRadius='12px'
                justifyContent="center"
            ><AiOutlineHome fontSize="26px"  /></Tab>

            <Tab
                transition="0.2s ease-out"
                color='black'
                _hover={{
                   background:  "orange",
                   opacity: "0.9",
                   transition: "0.2s ease-out",
                   color:'white'
                }}
                _selected={{bg: '#f97f29', color: 'white',  boxShadow: '2px 2px 25px orange'}}
                borderRadius='12px'
                justifyContent="center"
            ><BiBarChartSquare fontSize="26px" /></Tab>

            <Tab
                transition="0.2s ease-out"
                color='black'
                _hover={{
                   background:  "orange",
                   opacity: "0.9",
                   transition: "0.2s ease-out",
                   color:'white'
                }}
                _selected={{bg: '#f97f29', color: 'white',  boxShadow: '2px 2px 25px orange'}}
                borderRadius='12px'
                justifyContent="center"
            ><HiOutlineLocationMarker fontSize="26px" /></Tab>

            <Tab
                transition="0.2s ease-out"
                color='black'
                _hover={{
                   background:  "orange",
                   opacity: "0.9",
                   transition: "0.2s ease-out",
                   color:'white'
                }}
                _selected={{bg: '#f97f29', color: 'white',  boxShadow: '2px 2px 25px orange'}}
                borderRadius='12px'
                justifyContent="center"
            ><BsCalendarDate fontSize="26px" /></Tab>

            <Tab
                transition="0.2s ease-out"
                color='black'
                _hover={{
                   background:  "orange",
                   opacity: "0.9",
                   transition: "0.2s ease-out",
                   color:'white'
                }}
                _selected={{bg: '#f97f29', color: 'white',  boxShadow: '2px 2px 25px orange'}}
                borderRadius='12px'
                justifyContent="center"
            ><MdOutlineSettings fontSize="26px"/> </Tab>
        </TabList>
    </Tabs>
   )
 }
 
 export default memo(RespDash)