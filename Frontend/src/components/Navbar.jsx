
import { Img, Flex, Button,  HStack, Menu, MenuButton, MenuList, MenuItem, Tooltip, useDisclosure, Collapse, Stack, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, VStack, cookieStorageManager, useToast, MenuGroup, MenuDivider, Avatar, Text, Image } from "@chakra-ui/react";

import {Link} from 'react-router-dom'

import logo from "../Resources/logoR.png"
import style from "../styles/navbar.module.css"
import removedBG from '../Resources/removedBgMohallamart.png'

import { BiUser, BiCart, BiShoppingBag } from "react-icons/bi"
import TopSec from "./Products/TopSec";
import { HamburgerIcon } from "@chakra-ui/icons";
import { GiHamburgerMenu } from "react-icons/gi"
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {GrUserAdmin} from 'react-icons/gr'
import AvatarImg from '../Resources/avatar.jpg'
import CurlyArrow from '../Resources/curlyArrow.png'

let localData = JSON.parse(localStorage.getItem("userData")) || undefined
export default function Navbar(){
    let localData = JSON.parse(localStorage.getItem("userData")) || undefined
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const toast = useToast()
    const [role, setRole] = useState()
    const [render, setRender] = useState(false)
    useEffect(() => {

    }, [render])

    const handleSeller = () => {
        // if(props != ""){
        // }else{
        //     toast({
        //         title:'You have to Login first',
        //         description: "Login OR Create an account first",
        //         status: 'warning',
        //         duration: 6000,
        //         isClosable: true,
        //     })
        // }
    }
    
    const handleLogout = () => {
        localStorage.removeItem("userData")
        toast({
            title: "Logout Successfull",
            description : "Logged you out successfully",
            status: "success",
            duration : 4000,
            isClosable : true
        })
        setRender((prev) => !prev)
    }

    return(
        <HStack 
            w='95%' 
            color='white' 
            m='auto' 
            position='sticky' 
            top='7px' 
            zIndex='1000' 
            alignItems="center" 
            justify='space-between' 
            py={0} 
            px={8} 
            borderRadius='3xl'
            bgColor='rgba(255, 255, 255, .10)' 
            style={{backdropFilter: 'blur(10px)'}} 
            boxShadow='none'>
            

            <Flex w='30%' justifyContent="flex-start" display={{base:'none', sm:"none", md:"flex" }} pl='20px'>
                <Link to='/products'><Text _hover={{transform:'scale(1.2)'}} fontFamily="Dancing Script, cursive" transition='.1s linear' color='yellow' fontSize='26px'>Our Collection</Text></Link>
            </Flex>

            
            <Flex w='40%' gap="5px" alignItems="center" justifyContent='center'>
                <Link to="/" >
                    <Img src={logo} w="90px" transform='scale(1.5)' transition='1s ease'  _hover={{transform:'scale(1.5) rotate(360deg)'}}/>
                </Link>
            </Flex>

            {/* <Button size='lg' colorScheme='yellow'  color='white'>Become Merchent</Button> */}

            <Menu isLazy>
                <Flex
                    w='30%'
                    alignItems='center'
                    justifyContent='flex-end'>
                    <Flex display={{base:'none', md:'flex'}} flexDir='column' alignItems='flex-end' position='relative' w='fit-content' left='-10px'>
                        <Text color='gold' fontSize='12px' fontFamily='cursive' transform='rotate(-20deg)'>Click Me!</Text>
                        <Image src={CurlyArrow} w='30px' />
                    </Flex>
                    <Avatar src={AvatarImg} as={MenuButton} _hover={{ transform:'scale(1.6)'}} />
                </Flex>
                <MenuList color='black'>
                    <MenuGroup title='Profile'>
                        <Link to='/admin'><MenuItem>My Account</MenuItem></Link>
                        <Link to='/wishlist'><MenuItem>Wishlist</MenuItem></Link>
                        <Link to='/cart'><MenuItem>Cart</MenuItem></Link>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title='Options'>
                        <MenuItem><Link to='/become-seller'>Become a Merchent</Link></MenuItem>
                        {
                            localData != undefined && <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
                        }
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title='Help'>
                        <MenuItem><a href='https://github.com/aaryansinha16/MohallaMart' target='_blank'>Docs</a></MenuItem>
                    </MenuGroup>
                </MenuList>
            </Menu>


             
            <Button ref={btnRef} colorScheme='transparent' color="black" border="1px solid" onClick={onOpen} display={{md:'none'}}>
                <GiHamburgerMenu />
            </Button>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>

                <DrawerBody>
                    {/* <VStack fontSize='30px' spacing={5}>
                        <Link to='products'>See all Products</Link>
                        <Link to='wishlist'>Wishlist</Link>
                        <Link to='cart'>Cart</Link>
                        <Button colorScheme='green'>Login</Button>
                    </VStack> */}
                    <Flex flexDirection="column" className={style.drawer}>
                    <Link to='products'>See all Products</Link>
                        <Link to='wishlist'>Wishlist</Link>
                        <Link to='cart'>Cart</Link>
                        <Link to="/login"><Button colorScheme='transparent'>Login</Button></Link>
                    </Flex>
                </DrawerBody>

                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                    Close
                    </Button>
                    <Button colorScheme='blue' onClick={handleSeller}>Become a Seller </Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </HStack>
    ) 
}


