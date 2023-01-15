import { Avatar, Flex, HStack, Input, Text, VStack } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Divider,IconButton, InputGroup, InputLeftElement, InputRightAddon, InputRightElement, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from '@chakra-ui/react'
import React, { useState , useRef, memo} from 'react'
import { FiCrosshair } from 'react-icons/fi'
import DrawerMenu from './Drawer'

const TopSec = ({currData}) => {
    let localData = JSON.parse(localStorage.getItem("userData")) || undefined
  return (
    <HStack w='100%' justify='space-between'>
        <Flex alignItems='center' justifyContent='center' gap='20px'>
            <Avatar src={'https://bit.ly/dan-abramov'}/>
            <VStack spacing='0px' alignItems='flex-start' lineHeight={{base:'26px', md:'36px'}}>
                <Text fontSize={{base:'18px',md:'28px'}}>Hello,</Text>
                <Text fontSize={{base:'26px',md:'32px'}} fontWeight='500'>{localData == undefined ? "User" : localData.fName + " " + localData.lName}</Text>
            </VStack>
        </Flex>
        <DrawerMenu />
    </HStack>
  )
}

export default memo(TopSec)