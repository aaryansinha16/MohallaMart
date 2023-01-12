import { HamburgerIcon } from '@chakra-ui/icons'
import {
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Drawer,
    IconButton
  } from '@chakra-ui/react'

import React, { memo, useRef } from 'react'
import TabRight from '../TabRight'

function DrawerMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  
    return (
      <>
        {/* <Button colorScheme='teal' onClick={onOpen}>
          
        </Button> */}
        <IconButton 
          display={{base:'flex', lg:'none'}}
          aria-label='hamburger'
          onClick={onOpen}
          colorScheme='gray'
          py={6}
          icon={<HamburgerIcon />}
        />
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
  
            <DrawerBody>
              <TabRight tab='menu'/>
              <DrawerCloseButton />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default memo(DrawerMenu)