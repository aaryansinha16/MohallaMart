import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Text,
  Flex,
  VStack,
  HStack,
  Tooltip,
  useToast,
  Input,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";
import { SlBag } from "react-icons/sl";
import { BsCart, BsStarFill } from "react-icons/bs";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSingleProduct } from "../../redux/products/product.action";
import { postWishlistAction } from "../../redux/wishlist/wishlist.actions";
import { postCartAction } from "../../redux/cart/cart.actions";
import { useRef } from "react";
import { io } from 'socket.io-client'
import Login from "../Login";
import Reviews from "../../components/SingleProduct/Reviews";

const Socket = io.connect('https://helpful-tan-cricket.cyclic.app/')
const SingleProductPage = ({props}) => {
  const [data, setData] = useState()
  const [reviews,setReviews] = useState()
  const [reRender, setReRender] = useState(false)
  const [loggedIn , setLoggedIn]  = useState("")
  const reviewRef = useRef(null)
  
  const params = useParams()
  const dispatch = useDispatch()
  const toast = useToast()

  const OverlayOne = () => (
    <ModalOverlay
    bg='blackAlpha.300'
    backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = useState(<OverlayOne />)
  
  useEffect(() => {
    Socket.emit("new review", {review : "", productId: params.id})
  }, [])

  useEffect(() => {
    dispatch(getSingleProduct(params.id))
    .then((res) => {
        console.log(res, 'RESPONSE FOR SINGLE PRODUCT GET')
        setData(res.prod)
      })
      
      Socket.on("new review", (d) => {
        setReviews(d)
        console.log("Server said: ", d)
      })
    }, [])
    
  const handleSubmitReview=(review, rating)=>{
    // console.log(reviewRef.current.value)
    let localData = JSON.parse(localStorage.getItem("userData")) || undefined
    if(localData != undefined){
      if(review != ""){
        console.log('TESTING SOCKET')
        Socket.emit("new review", {
          userId: localData._id,
          productId: params.id,
          review: review,
          rating: rating
        })
        toast({
          title: "Review added",
          description : "Thanks for adding feedback!",
          status: 'success',
          duration : 4000,
          isClosable : true
        })
      }
      // console.log("TRIDAFD", localData)
    }
    else{
      onOpen()
      setOverlay(<OverlayOne />)
    }
  }
    
  const handleWishlist = () => {
    let localData = JSON.parse(localStorage.getItem("userData")) || undefined

    if(localData != undefined){
      dispatch(postWishlistAction(localData._id, params.id))
      .then((res) => {
        console.log(res, 'WISHLIST RESPONSE')
        toast({
            title: res.message,
            variant: 'subtle',
            description: res.message,
            status: res.message.split(' ').includes("added") ? 'success' : 'info',
            duration: 5000,
            isClosable: true,
        })
      })
    }else{
      onOpen()
      setOverlay(<OverlayOne />)
    }
  }

  const handleAddToCart = () => {
    let localData = JSON.parse(localStorage.getItem("userData")) || undefined

    if(localData != undefined){
      dispatch((postCartAction(localData._id,params.id)))
      .then((res) => {
          console.log(res,'RESPONSE POST CART')
          toast({
              title: res.message,
              variant: 'subtle',
              description: res.message,
              status: res.message.split(' ').includes("added") ? 'success' : 'info',
              duration: 5000,
              isClosable: true,
          })
      })
    }else{
      onOpen()
      setOverlay(<OverlayOne/>)
    }
    console.log("TERRIGER", localData)
  }

  const deleteReview =()=>{}

  var sum5 = 0
  var sum4 = 0
  var sum3 = 0
  var sum2 = 0
  var sum1 = 0
  for(var i = 0; i<reviews?.reviews.length; i++){
    let el = reviews.reviews[i].rating
    if(el == 1) sum1++
    else if(el == 2) sum2++
    else if(el == 3) sum3++
    else if(el == 4) sum4++
    else if(el == 5) sum5++
  }

  return (
    <Box className="home">
      <Navbar />
      <Flex
        maxWidth="90%"
        margin="auto"
        color='white'
        mt='20px'
        justifyContent='space-between'
        alignItems='flex-start'
        // h='1700px'
        flexDir={{base:'column', md:'row'}}
      >
        <Image
          w={{base:'70%',md:"45%"}}
          m={{base:'auto', md:'0'}}
          position={{base: 'static', md:'sticky'}}
          top='100px'
          borderRadius="20px"
          boxShadow='2xl'
          src={data?.src}
        />

        <Box p="30px">
          <Text fontSize="1xl" color='yellow' fontWeight="500">
            Mohalla Mart
          </Text>
          <Text fontSize="3xl" fontWeight="500">
            {data?.title}
          </Text>
          <Box display="flex" mt="2" alignItems="center" gap="5px">
            {
              reviews?.avgRating == undefined ?
              Array(5)
                .fill("")
                .map((_, i) => 
                (
                  <BsStarFill fontSize={"17px"} key={i}  color={i < data?.ratings ? "orange": "grey"} />
                ))
                :  
              Array(5)
                .fill("")
                .map((_, i) => 
                (
                  <BsStarFill fontSize={"17px"} key={i}  color={i < reviews.avgRating ? "orange": "grey"} />
                ))
            }
          </Box>
          <Text fontSize="3xl" fontWeight="500">$ {data?.price}</Text>
          <Box marginTop={"20px"}>
            <Box marginTop={"20px"}>
              <Text fontSize={"1xl"} fontWeight="500">
                Description
              </Text>
              {/* Description Here */}
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis aut tenetur sint! Nam, totam vero. Debitis iusto at
                deserunt minima doloremque, voluptatum cupiditate similique iure
                minus saepe animi, officia expedita?
              </Text>
              <Text
                fontSize={"1xl"}
                fontWeight="500"
                marginTop={"20px"}
                marginBottom="10px"
              >
                Choose Size
              </Text>
              {/* <RadioSizeCard /> */}
              <Text fontSize={"1xl"} fontWeight="500" marginTop={"30px"}>
                Choose Color
              </Text>
              <Flex
                maxWidth="350px"
                marginTop={"10px"}
                justifyContent={"center"}
                gap="15px"
                p="10px 0px"
                borderRadius={"10px"}
                boxShadow={
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                }
                alignItems={"center"}
                bg='white'
              >
                <Button borderRadius={"50%"} colorScheme="blue" ></Button>
                <Button borderRadius={"50%"} bg="black"></Button>
                <Button borderRadius={"50%"} colorScheme="pink"></Button>
                <Button borderRadius={"50%"} bg="grey"></Button>
                <Button borderRadius={"50%"} colorScheme="orange"></Button>
              </Flex>
              <HStack w="80%" m="auto" marginTop={"30px"} gap="10px">
                <Button
                  onClick={handleAddToCart}
                 position='sticky' bottom='10px' w="100%" color="white" bg={'green.400'}>
                  {" "}
                  Buy Now
                </Button>
                <Button
                  w="100%"
                  colorScheme="whiteAlpha"
                  variant="solid"
                  // color={"#2a977d"}
                  onClick={handleWishlist}
                >
                  Add To Wishlist <SlBag />
                </Button>
              </HStack>
            </Box>
          </Box>
          <Reviews reviews={reviews} sum5={sum5} sum4={sum4} sum3={sum3} sum2={sum2} sum1={sum1} data={data} handleSubmitReview={handleSubmitReview}/>
        </Box>
        <Login isOpen={isOpen} onClose={onClose} /> 
      </Flex>
      <Box onClick={handleAddToCart} position='fixed' top='90%' right='4%' zIndex='1000' bg='#2ebaa4' p={3} borderRadius='50%' transition='.2s linear' _hover={{transform:'scale(1.4)'}}>
        <Tooltip placement='top' hasArrow label='Buy Now' >
          <Box>
            <BsCart style={{fontSize:'30px', color:'white'}}/>
          </Box>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default SingleProductPage;


