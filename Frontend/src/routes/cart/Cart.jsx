
import { MinusIcon, SmallAddIcon } from "@chakra-ui/icons";
//  import Razorpay from 'razorpay-checkout';
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  useColorModeValue as mode,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import React, { Component, useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { CartItem } from "../../components/cart/CartItem";
import { CartOrderSummary } from "../../components/cart/CartOrderSummary";
import { cartData } from "../../components/cart/_data";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useDispatch } from "react-redux";
import { deleteCartAction, getCartAction } from "../../redux/cart/cart.actions";
import {store} from '../../redux/store'
import Logo from '../../Resources/logo-circle.png'
import { postOrderAction } from "../../redux/order/order.actions";
import Login from "../Login";


function Cart() {
  const toast = useToast()
  const [cartData, setCartData] = useState([])
  const [totalCost, setTotalCost] = useState(0)
  const [render, setRender] = useState(0)
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  const [prodRender, setProdRender] = useState(false)
  const navigate = useNavigate()

  // const forceUpdate = () => setRender((prev) => prev + 1)
  // store.subscribe(forceUpdate)
  // let cartItems = store.getState().cart.payload.items
  const OverlayOne = () => (
    <ModalOverlay
    bg='blackAlpha.300'
    backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = useState(<OverlayOne />)
  
  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("userData")) || undefined
    if(localData != undefined){
      dispatch(getCartAction(localData._id))
      .then((res) => {
        console.log(res,'RESPONSE GET CART')
        setCartData(res.items)
        let arr = []
        for(var i = 0; i<res.items.length; i++){
          arr.push({
            productId: res.items[i].productId._id,
            quantity: res.items[i].quantity,
            price : res.items[i].productId.price
          })
          setProducts(arr)
          if(totalCost == 0){
            let total = 0
            arr.map((el) => total += el.price * el.quantity)
            setTotalCost(total)
          }
        }
      })
    }
    console.log('render', render)
  }, [render])

  useEffect(() => {
    let total = 0
    products.map((el) => total += el.price * el.quantity)
    console.log(products, total)
    setTotalCost(total)
  }, [prodRender])

  
  const deleteItem = (productId) => {
    let localData = JSON.parse(localStorage.getItem("userData")) || undefined

    if(localData == undefined){
      onOpen()
      setOverlay(<OverlayOne />)
    }else{
      dispatch(deleteCartAction(localData._id, productId))
      .then((res) => {
        console.log(res, 'RESPONSE CART DELETE')
      })
    }
    setRender((prev) => prev + 1)
  }


// ! RAZORPAY CODE
  const makePayment = async (name, email, contact, amount) => {
    toast({
      title:'Payment starting',
      description:'Please wait while we process your order',
      duration: 5000,
      isClosable:true,
      status:'info'
    })
    console.log("name:", name, "email:", email, 'contact:', contact, 'amount:', amount)
    let localData = JSON.parse(localStorage.getItem("userData")) || undefined
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await axios.post("https://helpful-tan-cricket.cyclic.app/razorpay", {name,email,contact,amount})
    var options = {
      key: 'rzp_test_hQsLO3wTpgFfia', // Enter the Key ID generated from the Dashboard
      name: "Mohalla Mart Pvt Ltd",
      currency: data.data.currency,
      amount: data.data.amount,
      order_id: data.data.id,
      description: "Thankyou for your patronage",
      image: Logo,
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        // alert(`Payment Id: ${response.razorpay_payment_id}`);
        // alert(`Order Id: ${response.razorpay_order_id}`);
        // alert(`Razorpay Signature${response.razorpay_signature}`);

        toast({
          title: 'Payment Success.',
          description: `Order Id: ${response.razorpay_order_id}`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        })

      dispatch(postOrderAction(localData._id,totalCost, products, response.razorpay_order_id))
      .then((res) => {
        console.log(res, 'POST ORDER')
      })
      },
      prefill: {
        name: {name},
        email: {email},
        contact: {contact},
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    navigate('/orders')
  };
  
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  return (
    <Box className="home">
        <Navbar />
        <Box
        maxW={{ base: '3xl', lg: '7xl' }}
        mx="auto"
        px={{ base: '4', md: '8', lg: '12' }}
        py={{ base: '6', md: '8', lg: '12' }}
        mb={8}
        mt={5}
        color='white'
        
        borderRadius='100px 100px 100px 100px'
        bg='#00957b'
      >
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          align={{ lg: 'flex-start' }}
          spacing={{ base: '8', md: '16' }}
        >
          <Stack spacing={{ base: '8', md: '10' }} flex="2">
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart ({cartData?.length} items)
            </Heading>

            <Stack spacing="6">
              {
                cartData.length == 0 ?
                <Heading>Your cart is Empty!</Heading> 
                : 
                cartData?.map((item) => (
                  <CartItem key={item._id} {...item} setProducts={setProducts} setProdRender={setProdRender} products={products} handleDelete={deleteItem}/>
                ))
              }
            </Stack>
          </Stack>
          <Flex direction="column" align="center" flex="1" position='sticky' top='130px'>
            <CartOrderSummary totalCost={totalCost} makePayment={makePayment}/>
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link to="/products" style={{color:'blue.500'}}>Continue shopping</Link>
            </HStack>
            <Login isOpen={isOpen} onClose={onClose}/>
          </Flex>
        </Stack>
      </Box>
      <Box
          w='100%'
          h='70px'
          // bg='#00957b'
          // mt='100px'
          position='relative'
          top='70px'
          // border='1px solid red'
          borderRadius='0 0 100px 100px'
      ></Box>
  </Box>
  );
}

export default Cart;