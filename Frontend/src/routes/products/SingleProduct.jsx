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
} from "@chakra-ui/react";
import { RadioSizeCard } from "../../components/SingleProduct/RadioCard";
import { AiOutlineStar } from "react-icons/ai";
import { SlBag } from "react-icons/sl";
import TabsSection from "../../components/SingleProduct/Tabs";
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

const Socket = io.connect('http://localhost:3000')
const SingleProductPage = ({props}) => {
  const [data, setData] = useState()
  const [reviews,setReviews] = useState()
  const [reRender, setReRender] = useState(false)
  const [loggedIn , setLoggedIn]  = useState("")
  const reviewRef = useRef(null)

  const params = useParams()
  const dispatch = useDispatch()
  const toast = useToast()

  useEffect(() => {
    dispatch(getSingleProduct(params.id))
    .then((res) => {
      console.log(res, 'RESPONSE FOR SINGLE PRODUCT GET')
      setData(res.prod)
    })
  }, [])

  const handleWishlist = () => {
    dispatch(postWishlistAction('63b326771a3dd7f1ca16731a', params.id))
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
  }

  const handleAddToCart = () => {
    dispatch((postCartAction('63b326771a3dd7f1ca16731a',params.id)))
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
  }

  const handleClick= () => {}
  const handleSubmitReview=(data,fillStar)=>{
    // console.log(reviewRef.current.value)
    if(reviewRef.current.value != ""){
      Socket.emit("new review", {
        userId: '63b326771a3dd7f1ca16731a',
        productId: params.id,
        review: reviewRef.current.value,
        rating: 4.5
      })
      alert("Review sent")
    }
  }
  const deleteReview =()=>{}

  return (
    <>
      <SimpleGrid
        columns={[1, 1, 2]}
        maxWidth="90%"
        margin="auto"
      >
        <Box
          w="100%"
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          borderRadius="20px"
          margin="auto"
          display={"flex"}
          justifyContent="center"
        >
          <Image
            borderRadius="20px"
            w="90%"
            src={data?.src}
          />
        </Box>

        <Box p="30px">
          <Text fontSize="1xl" color={"#2a977d"} fontWeight="500">
            Mohalla Mart
          </Text>
          <Text fontSize="3xl" color={"black"} fontWeight="500">
            {data?.title}
          </Text>
          <Box display="flex" mt="2" alignItems="center" gap="5px">
            {Array(5)
              .fill("")
              .map((_, i) => 
              (
                <BsStarFill fontSize={"17px"} key={i}  color={i < 4 ? "orange": "grey"} />
              ))}
          </Box>
          <Text fontSize="3xl" color={"black"} fontWeight="500">$ {data?.price}</Text>
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
              <RadioSizeCard />
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
                 position='sticky' bottom='10px' w="100%" color="white" bg={"#2a977d"}>
                  {" "}
                  Buy Now
                </Button>
                <Button
                  w="100%"
                  colorScheme="#2a977d"
                  variant="outline"
                  color={"#2a977d"}
                  onClick={handleWishlist}
                >
                  Add To Wishlist <SlBag />
                </Button>
              </HStack>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
      <Box position='fixed' top='90%' right='4%'>
        <Tooltip placement='top' hasArrow label='Buy Now' >
          <Box  zIndex='99999'>
            <BsCart style={{fontSize:'30px', }}/>
          </Box>
        </Tooltip>
      </Box>
      <Input type='text' placeholder='test' ref={reviewRef} />
      <Button onClick={handleSubmitReview}>Text</Button>
        <TabsSection handleSubmitReview={handleSubmitReview} loggedIn={loggedIn} showReviews={reviews} deleteReview={deleteReview}/>
    </>
  );
};

export default SingleProductPage;


