import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, HStack, Image, Input, Select, Text, useDisclosure, useToast, VStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

import LeftSec from "../../components/Products/LeftSec";
import MidSec from "../../components/Products/MidSec";
import RightSec from "../../components/Products/RightSec";
import TopSec from "../../components/Products/TopSec";

import bgSvg from '../../Resources/blob-scene-haikei.svg'
import bubbles from '../../Resources/circle-scatter-haikei.svg'
import blob1 from '../../Resources/blob1.svg'
import blob2 from '../../Resources/blob2.svg'
import blob3 from '../../Resources/blob3.svg'


import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FiFilter } from "react-icons/fi";
import { useDispatch } from "react-redux";

import { getProductsAction } from "../../redux/products/product.action";
import { getWishlistAction, postWishlistAction } from "../../redux/wishlist/wishlist.actions";
import { postCartAction } from "../../redux/cart/cart.actions";
import {store} from '../../redux/store'

export default function Products({props}={}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    const [page, setPage] = useState(1)
    const [Allproducts , setAllProducts] = useState([])
    const [wishlist, setWishlist] = useState([])
    const [render, setRender] = useState(false)

    const toast = useToast()
    const dispatch = useDispatch()

    // let forceUpdate = () => setRender((prev) => !prev)
    // store.subscribe(forceUpdate)

    useEffect(() => {
        dispatch(getProductsAction())
        .then((res) => {
            // console.log(res, 'RESPONSE ALL PRODUCTS PAGE')
            setAllProducts(res.prod)
            toast({
                title: "Products Fetched",
                variant: 'subtle',
                description: res.message,
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
        })
        console.log('test1')
    }, [])
    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("userData")) || undefined
        if(localData != undefined){
            dispatch(getWishlistAction(localData._id))
            .then((res) => {
                // console.log(res, 'RESPONSE GET WISHLIST')
                setWishlist(res.items)
            })
            console.log('test2')
        }
    }, [render])

    const handleSearch = (query) => {}


    const handleFilter =(e)=>{}
    const getProductsByPrice=(data)=>{}
    const getProductsByRating = (min,max) => {}
    const resetProducts =()=>{}

    return(
    <>
        {/* // ? Below is the code for Breadcrumb's and Sorting strip */}
        <Box
            w='100%'
            className="home"
            color='white'
        >
            <Navbar/>
            {/* <Flex justify='flex-start' w='80%' m='auto' fontSize='12px' mt='30px' color='white'>
                    <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/'>MohallaMart</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='/products'>Products</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
            </Flex> */}

            {/* <Divider/> */}

            <Flex justify={{base:'space-between', lg:'flex-start'}} w='80%' m='auto' align='center' pt={2} pb={2} fontSize='14px'>
                <HStack w={{base:'30%',lg:'20%'}} align='center'>
                    {/* <Select placeholder="Sort By" _placeholder={{color:'black'}} variant='outline' fontWeight='semibold' border='1px solid orange' colorScheme='orange' focusBorderColor="green" w='150px' onChange={handleFilter}>
                        <option style={{color:'black'}} value='DESC'>High to Low</option>
                        <option style={{color:'black'}} value='ASC'>Low to High</option>
                    </Select> */}
                </HStack>

                <Button display={{lg:'none'}} ref={btnRef} onClick={onOpen} variant='outline' rightIcon={<FiFilter/>}>Filters </Button>
                <Drawer
                    isOpen={isOpen}
                    placement='bottom'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Filters</DrawerHeader>

                    <DrawerBody>
                        <LeftSec data={Allproducts} getProductsByPrice={getProductsByPrice} />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                        Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                    </DrawerContent>
                </Drawer>
                
            </Flex>


            {/* //? Here starts the code for Product's grid & Filters */}
            {/* <Image display={{base:'none', md:'block'}} src={blob1} w='300px' position='fixed' top='40%' left='20%' zIndex='-10' />
            <Image display={{base:'none', md:'block'}} src={blob2} w='400px' position='fixed' top='40%' left='80%' zIndex='-10' />
            <Image display={{base:'none', md:'block'}} src={blob3} w='400px' position='fixed' top='20%' left='50%' zIndex='-10' /> */}
            {/* <Image display={{base:'none', md:'block'}} src='https://animoto.com/static/TealDots-212c4a91665ce0cc624cdf92514a34d6.svg' w='180px' position='fixed' top='20%' left='0%' zIndex='-10' /> */}
            <Box w='100%' 
                as={VStack}
                py={3}
                backgroundSize='cover'
                //   backgroundImage={bgSvg}
                backgroundAttachment='fixed'
                m='auto'
                borderRadius='100px 100px 0 0'
                bg='#00957b'
                mt='40px'
              > 
                <TopSec />

                <Flex m='auto' mt='30px' mb='30px' w={{lg:'90%', xl:'80%'}} justify={{base:'center', lg:'space-between'}}  >

                    <Box bg='white'  w='20%' h='fit-content' borderRadius='2xl'  display={{base:'none', lg:'block'}} position='sticky' top='100px' p={2}
                        bgColor='rgba(255, 255, 255, .35)' style={{backdropFilter: 'blur(5px)'}} boxShadow='2xl' _hover={{boxShadow:'0 0 1rem 0 rgba(0, 0, 0, .2)'}}
                    >
                        <LeftSec data={props} getProductsByPrice={getProductsByPrice} getProductByRating={getProductsByRating} resetProducts={resetProducts}/>
                    </Box>

                    <Box  w={{base:'95%',lg: "75%", xl:'78%'}} >
                        <MidSec data={Allproducts} wishlist={wishlist} page={page} setPage={setPage} setRender={setRender}/>
                    </Box>

                </Flex>

            <Box
            w='100%'
            h='70px'
            bg='#00957b'
            // mt='100px'
            position='relative'
            top='70px'
            // border='1px solid red'
            borderRadius='0 0 100px 100px'
        ></Box>
            </Box>


        </Box>
    </>
    )
};

