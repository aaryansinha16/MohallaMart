
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

export default function Navbar({props={}, handleSearch}){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const toast = useToast()
    const [role, setRole] = useState()

    useEffect(() => {
        // axios.get('/api/users/rolecheck').then((res) => {
        //     console.log(res.data , 'ROLE, NAVBAR')
        //     setRole(res.data)
        // })
        // .catch((e) => {
        //     console.log(e, 'e TOLE NAVBAR')
        //     setRole("Buyer")
        // })
     }, [])
  

    // if(props){
    //     props = JSON.parse(props) || null
    // }

    const handleSeller = () => {
        if(props != ""){
        }else{
            toast({
                title:'You have to Login first',
                description: "Login OR Create an account first",
                status: 'warning',
                duration: 6000,
                isClosable: true,
            })
        }
    }

    const handleLogout =() => {
        axios.get('/api/users/logout').then((res) => {
            console.log(res, 'LOGOUT SUCCESS')
            toast({
                title: 'Logout Successfull.',
                description: "You have logged out successfully.",
                status: 'info',
                duration: 9000,
                isClosable: true,
              })
      
        })
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
            

            <Flex w='30%' justifyContent="space-evenly" display={{base:'none', sm:"none", md:"flex" }} >
                <Menu>
                    <MenuButton>
                        <BiUser style={{fontSize:'26px'}}/>
                    </MenuButton>
                    <MenuList>
                        <Link to="/login">
                            {
                                props ? 
                                <MenuItem color='black' command='⌘T' onClick={handleLogout}>
                                    Logout
                                </MenuItem>
                                :
                                <MenuItem color='black' command='⌘T'>
                                    Login
                                </MenuItem>
                            }
                        </Link>
                        <Link to='/becomeseller'>
                            <MenuItem color='black' command='⌘N'>
                                Become a Seller
                            </MenuItem>
                        </Link>
                    </MenuList>
                </Menu>



                <Tooltip label="Cart">
                    <Link to="/cart">
                        <BiCart style={{fontSize:'26px'}}/>
                    </Link>
                </Tooltip>

                <Tooltip label="Wishlist">
                    <Link to="/wishlist">
                        <AiOutlineHeart style={{fontSize:'26px', color:'yellow'}}/>
                    </Link>
                </Tooltip>
                {
                    role != "Buyer" && 
                    <Tooltip label="Admin Panel">
                        <Link to="/admin">
                            <GrUserAdmin style={{fontSize:'26px', color:'green'}}/>
                        </Link>
                    </Tooltip>

                }
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
                    <MenuItem><Link to='/admin'>My Account</Link></MenuItem>
                    <MenuItem>Payments </MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title='Help'>
                    <MenuItem>Docs</MenuItem>
                    <MenuItem>FAQ</MenuItem>
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


