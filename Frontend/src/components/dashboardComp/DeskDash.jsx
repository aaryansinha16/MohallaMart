import { Tab, TabList, TabPanel, TabPanels, Tabs, VStack, Box, Heading, Text, useToast, Button, HStack, Divider, Flex, Badge, Image, FormLabel, Input } from '@chakra-ui/react'
import React, {useState, useEffect, memo} from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BiBarChartSquare } from 'react-icons/bi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import MainDash from './mainDash/MainDash'
import {BsCalendarDate} from 'react-icons/bs'
import {MdOutlineSettings} from 'react-icons/md'
import TabRight from './TabRight'
import { useDispatch } from 'react-redux'
import { postProduct } from '../../redux/products/product.action'


let localData = JSON.parse(localStorage.getItem("userData")) || undefined
const DeskDash = () => {
   let localData = JSON.parse(localStorage.getItem("userData")) || undefined
   console.log("Dashboard render test")
   const toast = useToast()
   const dispatch = useDispatch()

   const [currData, setCurrData] = useState([])
   const [futureData ,setFutureData] = useState([])
   const [pollData, setPollData] = useState([])

   const [prodDetail, setProdDetail] = useState({
      userId : localData?._id
   })

   function onChange(e){
      let {name, value } = e.target

      setProdDetail({
         ...prodDetail,
         [name] : value
      })
   }

   const handleCreateProduct = () => {
      if(localData == undefined || localData.role == "Buyer"){
         return 
      }
      // console.log(prodDetail)
      dispatch(postProduct(prodDetail))
      .then((res) => {
         toast({
            title : "Product Created Successfully",
            isClosable : true,
            duration : 6000,
            status : 'info'
         })
      })
   }

   return (
      <HStack gap={0} spacing={0} justifyContent='center' pr={4} display={{base:'none', md:'flex'}}>
     <Tabs
            //  variant="soft-rounded"
             colorScheme='orange'
             minH="100vh"
             defaultIndex={0}
            //  bg='rgba(255,255,255, .4)'
             isLazy
             overflow='hidden'
             w={{base:'100%', lg:'80%'}}
             align='end'
          >
             <TabList
                flexDir={{base:'row', md:"column"}}
                pr={{ base: 0, md: 1 }}
                pb={5}
                pl={1}
                pt='8'
                h="100%"
                w="100px"
                position="fixed"
                justifyContent="space-between"
                borderTopRightRadius={"xl"}
             >
                <VStack spacing={8} flexDir={{base:'row', md: 'column'}}>
                   <Tab
                      fontSize={"lg"}
                      bg="transparent"
                      transition="0.2s ease-out"
                      color='white'
                      _hover={{
                          background:  "orange",
                          opacity: "0.9",
                          transition: "0.2s ease-out",
                          color:'white'
                      }}
                      _selected={{bg: '#f97f29', color: 'white',  boxShadow: '2px 2px 25px orange'}}
                      w="60%"
                      borderRadius='12px'
                      justifyContent="center"
                      className='tab'
                   >
                      <AiOutlineHome fontSize="26px"  />
                   </Tab>
 
                   <Tab
                        fontSize={"lg"}
                        bg="transparent"
                        transition="0.2s ease-out"
                        color='white'
                        _hover={{
                        background:  "orange",
                        opacity: "0.9",
                        transition: "0.2s ease-out",
                        color:'white'
                        }}
                        _selected={{bg: '#f97f29', color: 'white',  boxShadow: '2px 2px 25px orange'}}
                        w="60%"
                        borderRadius='12px'
                        justifyContent="center"
                   >
                      <BiBarChartSquare fontSize="26px" />
                   </Tab>
 
                   <Tab
                        fontSize={"lg"}
                        bg="transparent"
                        transition="0.2s ease-out"
                        color='white'
                        _hover={{
                        background:  "orange",
                        opacity: "0.9",
                        transition: "0.2s ease-out",
                        color:'white'
                        }}
                        _selected={{bg: '#f97f29', color: 'white',  boxShadow: '2px 2px 25px orange'}}
                        w="60%"
                        borderRadius='12px'
                        justifyContent="center"
                   >
                      <HiOutlineLocationMarker fontSize="26px" />
                   </Tab>
 
                   <Tab
                      isDisabled={localData == undefined || localData.role == "Buyer"}
                      fontSize={"lg"}
                      bg="transparent"
                      transition="0.2s ease-out"
                      color='white'
                      _hover={{
                         background:  "orange",
                         opacity: "0.9",
                         transition: "0.2s ease-out",
                         color:'white'
                      }}
                      _selected={{bg: '#f97f29', color: 'white',  boxShadow: '2px 2px 25px orange'}}
                      w="60%"
                      borderRadius='12px'
                      justifyContent="center"
                   >
                      <BsCalendarDate fontSize="26px" />
                   </Tab>
 
                   <Tab
                        fontSize={"lg"}
                        bg="transparent"
                        transition="0.2s ease-out"
                        color='white'
                        _hover={{
                            background:  "orange",
                            opacity: "0.9",
                            transition: "0.2s ease-out",
                            color:'white'
                        }}
                        _selected={{bg: '#f97f29', color: 'white',  boxShadow: '2px 2px 25px orange'}}
                        w="60%"
                        borderRadius='12px'
                        justifyContent="center"
                   >
                      <MdOutlineSettings fontSize="26px"/> 
                   </Tab>
 
                </VStack>
 
             </TabList>
 
             <TabPanels p={2}  pl='110px' backgroundSize='cover' h='100vh'>
 
                <TabPanel >
                      <Box 
                        pl={6} 
                        pr={6} 
                        pb={2} 
                        pt={2} 
                        w='100%' 
                        h='94vh'  
                        bgColor='rgba(255, 255, 255, .20)' 
                        borderRadius='2xl' 
                        style={{backdropFilter: 'blur(5px)'}} 
                        boxShadow='lg' 
                        m='auto'
                        color='white'
                        overflowY='scroll' >
                         <MainDash currData={currData} futureData={futureData} pollData={pollData}/>
                     </Box>
                </TabPanel>
 
                //* FOR ALL USERS
                <TabPanel >
                     <Box className='tbl' p={6} w='100%' h='90vh'  bgColor='rgba(255, 255, 255, .20)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto' >
                         <Text fontSize='4xl' color='white'>Users</Text>
                         <Heading pt='40px' textAlign='center'>Under Construction</Heading>
                        {/* <Image
                           boxSize='100%'
                           mt='100px'
                           fit='cover'
                           src={ConstructionImg}
                        /> */}
                     </Box>
                </TabPanel>
 
                //* FOR ALL BRANDS
                <TabPanel>
                   <Box p={6} w='100%' h='90vh'  bgColor='rgba(255, 255, 255, .20)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto' >
                         <Text fontSize='4xl' color='white'>Brands</Text>
                         <Heading pt='40px' textAlign='center'>Under Construction</Heading>
                        {/* <Image
                           boxSize='100%'
                           mt='100px'
                           fit='cover'
                           src={ConstructionImg}
                        /> */}
                   </Box>
                </TabPanel>
 
                //* FOR ALL PRODUCTS
                <TabPanel>
                   <Box color='white' w='100%' p={6} h='90vh' bgColor='rgba(255, 255, 255, .20)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto' >
                         <Heading pt='40px' textAlign='center'>Create Products</Heading>
                         <VStack
                           w='75%'
                           p={6}
                           bg='rgba(255, 255, 255, .15)'
                           m='auto'
                           mt='50px'
                           alignItems='flex-start'
                           spacing={6}
                           borderRadius='3xl'
                         >
                           <VStack spacing='-2' alignItems='flex-start' w='100%'>
                              <FormLabel>Product Name:</FormLabel>
                              <Input name='title' onChange={(e) => onChange(e)} color='black' outline='none' focusBorderColor='transparent' size='lg' bg='yellow.300' w='100%'/>
                           </VStack>

                           <Flex
                              w='100%'
                              justifyContent='center'
                              gap={5}
                              alignItems='center'
                           >
                              <VStack spacing='-2' alignItems='flex-start' w='100%'>
                                 <FormLabel>Set Price:</FormLabel>
                                 <Input name='price' color='black' onChange={(e) => onChange(e)} outline='none' focusBorderColor='transparent' size='lg' bg='yellow.300' w='100%' type='number' />
                              </VStack>
                              <VStack spacing='-2' alignItems='flex-start' w='100%'>
                                 <FormLabel>Set Quantity:</FormLabel>
                                 <Input name='quantity' color='black' onChange={(e) => onChange(e)} outline='none' focusBorderColor='transparent' size='lg' bg='yellow.300' w='100%' type='number' />
                              </VStack>
                           </Flex>

                           <VStack spacing='-2' alignItems='flex-start' w='100%'>
                              <FormLabel>Product Image:</FormLabel>
                              <Input name='image' color='black' onChange={(e) => onChange(e)} outline='none' focusBorderColor='transparent' size='lg' bg='yellow.300' w='100%' type='url' />
                           </VStack>

                           <Button colorScheme='yellow' color='white' onClick={handleCreateProduct}>Create Product</Button>
                         </VStack>
                   </Box>
                </TabPanel>
 
                //* CREATING PRODUCTS
                <TabPanel>
                   <Box w='100%' p={6} h='90vh'  bgColor='rgba(255, 255, 255, .20)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto'>
                      <Text fontSize='4xl' color='white'>Create a new Product</Text>
                         <Heading pt='40px' textAlign='center'>Under Construction</Heading>
                        {/* <Image
                           boxSize='100%'
                           mt='100px'
                           fit='cover'
                           src={ConstructionImg}
                        /> */}
                   </Box>
                </TabPanel>
 
                //* CREATING BRANDS
                {/* <TabPanel>
                <Box w='100%' p={6} h='90vh'  bgColor='rgba(255, 255, 255, .20)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto'>
                      <Text fontSize='4xl' color='white'>Create a new Brand</Text>
                 </Box>
                </TabPanel> */}
                
             </TabPanels>
          </Tabs>
          <Box w='100px' h='100px' bg='orange' borderRadius='50%' bottom='-10px' position='fixed' right='-30px'></Box>
         <Box w='20%' display={{base:'none', lg:'block'}}>
            <TabRight/>
         </Box>

      </HStack>
   )
 }
 
 export default memo(DeskDash)