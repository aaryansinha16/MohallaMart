import { Box, HStack, Stack, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { CartItem } from "../../components/cart/CartItem";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { getOrderAction } from "../../redux/order/order.actions";

export default function Orders() {
    const [ordersData, setOrdersData] = useState([]);
    const [totalValue, setTotalValue] = useState(0)
    let dispatch = useDispatch()
    let toast = useToast()
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        let localData = JSON.parse(localStorage.getItem("userData")) || undefined
        if(localData != undefined){
            setLoading(true)
            dispatch(getOrderAction(localData._id))
            .then((res) => {
                // console.log('RESPONSE FOR GET ORDERS', res)
                setOrdersData(res.allItems)
                setTotalValue(res.totalCost)
                setLoading(false)
            })
        }else{
            toast({
                title : "Login Or Signup first",
                description : "You need to login to check orders",
                status: 'warning',
                duration : 6000,
                isClosable : true
            })
        }
    },[])


    return(
        <Box className="home" color='white'>
            <Navbar />
            <Text fontSize="3rem" py={8} px={8} w='70%' m="auto" fontFamily='monospace'>Your Orders</Text>
            <HStack mt='40px' w='70%' m='auto' justifyContent='center' align='center'>
                <Text 
                    fontSize='32px'
                    fontFamily='mono'
                >Total Order Value:</Text>
                <Text fontSize='26px' fontWeight='medium'>{`${totalValue?.toFixed(2)}`}₹</Text>
            </HStack>
            {loading && "LOADING"}
            <Stack spacing="6" w={{base:'100%',md:'80%',lg:"60%"}} m="auto" mb='100px' borderRadius='100px 100px 100px 100px' bg='#00957b' px={{ base: '4', md: '8', lg: '12' }}
        py={{ base: '6', md: '8', lg: '12' }}>
              {
                ordersData?.map((item) => (
                    <CartItem key={item._id} {...item} />
                ))
              }
            </Stack>

            <Box
          w='100%'
          h='70px'
          // bg='#00957b'
          // mt='100px'
          position='relative'
          top='0px'
          // border='1px solid red'
          borderRadius='0 0 100px 100px'
      ></Box>
        </Box>
    )
}

