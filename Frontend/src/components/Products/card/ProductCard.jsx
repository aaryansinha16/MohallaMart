import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    IconButton,
    useToast,
    Text,
    ModalOverlay,
    useDisclosure,
  } from '@chakra-ui/react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
// import {Link} from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { postCartAction } from '../../../redux/cart/cart.actions';
import { postWishlistAction } from '../../../redux/wishlist/wishlist.actions';
import Login from '../../../routes/Login';
  
  
  function Rating({ rating, numReviews }) {
    return (
      <Flex alignItems="center" color='orange' pl={4}>
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box>
      </Flex>
    );
  }


  
  function ProductCard({
    _id,
    src,
    title,
    brand,
    available,
    price,
    ratings,
    number_of_reviews,
    description,
    quantity,
    currPage,
    isWishlist,
    setRender,
    productId
  }) {
    
  title= title?.slice(0,15)
  const [styles, setStyles] = useState(false)
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
  
  const handleWishlist = (productId) => {
    let localData = JSON.parse(localStorage.getItem("userData")) || undefined
    if(localData == undefined){
      onOpen()
      setOverlay(<OverlayOne/>)
    }
    else{
      dispatch(postWishlistAction(localData._id , productId))
      .then((res) => {
        console.log(res, 'WISHLIST RESPONSE')
        setRender((prev) => !prev)
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
  }
      
  const handleAddToCart = (productId) => {
    let localData = JSON.parse(localStorage.getItem("userData")) || undefined
    console.log(localData,'LOCALDATA')
    if(localData == undefined){
      onOpen()
      setOverlay(<OverlayOne/>)
    }else{
      dispatch((postCartAction(localData._id , productId)))
      .then((res) => {
          console.log(res,'RESPONSE POST CART')
          setRender((prev) => !prev)
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
  }

    return (
      <Flex
        bg="transparent"
        // p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
        >
        <Box
          maxW="xs"
          w='100%'
          mx="auto"
          bg="white"
          shadow="lg"
          rounded="lg"
        >
          <Box px={4} py={2} as={Flex} justifyContent='space-between' alignItems='center'>
            <Link to={`/products/${_id}`}>
            <chakra.h1
              color="gray.800"
              fontWeight="bold"
              fontSize="xl"
              textTransform="uppercase"
            >
              {title}...
            </chakra.h1>
            </Link>
            <Tooltip
              label={isWishlist ? "Remove from wishlist" :"Add to Favourite"}
              bg="white"
              placement={'bottom'}
              color={'gray.800'}
              fontSize={'0.8em'}>
                <Box onClick={() => {
                  handleWishlist(_id)
                  setStyles(!styles)
                }} 
                w='fit-content'
                // position='relative' 
                // top='-40px' 
                // left="87%" 
                background='white'  
                fontSize='20px'  padding="5px" borderRadius='13px'
                _hover={{bg:'pink'}}>
                  {
                    isWishlist == true ? 
                    <AiFillHeart style={{color: 'red'}}/>
                    :
                    <AiOutlineHeart style={{color:'red'}} />
                  }
                </Box>
              </Tooltip>
          </Box>

          <Rating rating={ratings} numReviews={quantity} />
          <Link to={`/products/${_id}`} >
          <Image
            h={48}
            w="full"
            fit="cover"
            mt={2}
            src={src}
            alt="NIKE AIR"
            boxShadow='2xl'
          />
          </Link>

          <Flex
            alignItems="center"
            justifyContent="space-between"
            px={4}
            py={2}
            bg="gray.900"
            roundedBottom="lg"
          >
            <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
              {price}$
            </chakra.h1>
            <chakra.button
              px={2}
              py={1}
              bg="white"
              fontSize="xs"
              color="gray.900"
              fontWeight="bold"
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: "gray.200",
              }}
              _focus={{
                bg: "gray.400",
              }}
              onClick={() => handleAddToCart(_id)}
            >
              Add to cart
            </chakra.button>
            <Login isOpen={isOpen} onClose={onClose}/>
          </Flex>
        </Box>
        </Flex>
    );
  }
  
  export default ProductCard;