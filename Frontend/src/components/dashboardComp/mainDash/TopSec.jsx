import { Avatar, Flex, HStack, Input, Text, VStack } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Divider,IconButton, InputGroup, InputLeftElement, InputRightAddon, InputRightElement, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from '@chakra-ui/react'
import React, { useState , useRef, memo} from 'react'
import { FiCrosshair } from 'react-icons/fi'
import DrawerMenu from './Drawer'

const TopSec = ({currData}) => {
  return (
    <HStack w='100%' justify='space-between'>
        <Flex alignItems='center' justifyContent='center' gap='20px'>
            <Avatar src={'https://bit.ly/dan-abramov'}/>
            <VStack spacing='0px' alignItems='flex-start' lineHeight={{base:'26px', md:'36px'}}>
                <Text fontSize={{base:'18px',md:'32px'}}>Hello,</Text>
                <Text fontSize={{base:'26px',md:'36px'}} fontWeight='500'>{currData?.name}</Text>
            </VStack>
        </Flex>

        <HStack
            w={{base:'80%', md:'35%'}} 
        >
                <HStack 
                    display={{base:'none', sm:'flex'}}  
                    w='90%'
                    borderRadius='md' 
                    py={{base:3, md:3}} 
                    px={5}  
                    boxShadow='lg'
                    // bgColor='rgba(255, 255, 255, .65)' 
                    bgColor='gray.100'
                    style={{backdropFilter: 'blur(5px)'}}
                    transition= '0.2s linear'
                    _hover={{bgColor:'rgba(255, 255, 255, .95)', transition: '0.2s linear'}}
                    >

                        <Input
                            px={4}
                            fontSize='16px'
                            placeholder='Search for a Location...'
                            variant='unstyled'
                        />

                        <Box w='30px' >
                            <SearchIcon cursor='pointer'  color='orange' fontSize='20px'/>
                        </Box>
                </HStack>
                <DrawerMenu />
        </HStack>
    </HStack>
  )
}

export default memo(TopSec)