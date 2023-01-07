import { HStack, Stack, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { CartItem } from "../../components/cart/CartItem";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { getOrderAction } from "../../redux/order/order.actions";

export default function Orders() {
    const [ordersData, setOrdersData] = useState([]);
    let dispatch = useDispatch()
    let toast = useToast()

    useEffect(()=>{
        dispatch(getOrderAction('63b326771a3dd7f1ca16731a'))
        .then((res) => {
            console.log('RESPONSE FOR GET ORDERS', res)
            setOrdersData(res.items)
        })
    },[])


    return(
        <>
            <Text fontSize="3rem" py={8} px={8} w='70%' m="auto" fontFamily='monospace'>Your Orders</Text>
            <HStack mt='40px' w='70%' m='auto' justifyContent='center' align='center'>
                <Text 
                    fontSize='32px'
                    fontFamily='mono'
                >Total Order Value:</Text>
                <Text fontSize='26px' fontWeight='medium'>{ordersData.totalCost}₹</Text>
            </HStack>
            <Stack spacing="6" w="60%" m="auto" mb='100px'>
              {
                ordersData?.products?.map((item) => (
                    <CartItem key={item._id} {...item} />
                ))
              }
            </Stack>
        </>
    )
}

