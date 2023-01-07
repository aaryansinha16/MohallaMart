import { Box, Flex, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import LeftSec from '../../components/Products/LeftSec'
import MidSec from '../../components/Products/MidSec'

import bgSvg from '../../Resources/blob-scene-haikei.svg'
import {store} from '../../redux/store'
import { useDispatch } from 'react-redux'
import { getWishlistAction } from '../../redux/wishlist/wishlist.actions'

const Wishlist = ({props}) => {

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState("ASC")
    const [loading , setLoading ] = useState(false)
    const [change , setChange] = useState(false)
    const [render, setRender] = useState(false)
    const dispatch = useDispatch()
    const toast = useToast()

    // let forceUpdate = () => setRender((prev) => !prev)
    // store.subscribe(forceUpdate)
    // let item = store.getState().wishlist.payload.items

    // console.log(item, 'WISHLIST')

    useEffect(() => {
        dispatch(getWishlistAction('63b326771a3dd7f1ca16731a'))
        .then((res) => {
            console.log(res, 'RESPONSE GET WISHLIST')
            setData(res.items)
        })
    }, [render])

    const getProductByPrice = (from, to) => {
        setLoading(true)
    }
    
    const handleDelWishlist = (productId) => {
    }

  return (
    <>

    <Box w='100%' 
        py={3}
        backgroundSize='cover'
        backgroundImage={bgSvg}
        backgroundAttachment='fixed'
        >

        <Flex m='auto' mt='30px' mb='30px' w='80%' justify={{base:'center', lg:'space-between'}}  >

            <Box bg='white'  w='20%' h='fit-content' borderRadius='2xl'  display={{base:'none', lg:'block'}} position='sticky' top='100px' p={2}
                bgColor='rgba(255, 255, 255, .35)' style={{backdropFilter: 'blur(5px)'}} boxShadow='2xl' _hover={{boxShadow:'0 0 1rem 0 rgba(0, 0, 0, .2)'}}
            >
                <LeftSec data={props} getProductByPrice={getProductByPrice} getProductByRating={handleDelWishlist}/>
            </Box>

            <Box  w={{base:'95%', xl:'78%'}} >
                <MidSec data={data} page={page} setPage={setPage} currPage="wishlist" setRender={setRender}  handleDelWishlist={handleDelWishlist}/>
            </Box>

        </Flex>

    </Box>

    </>
  )
}

export default Wishlist