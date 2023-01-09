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
    Link
  } from '@chakra-ui/react';
import { useState } from 'react';
// import {Link} from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { postCartAction } from '../../../redux/cart/cart.actions';
import { postWishlistAction } from '../../../redux/wishlist/wishlist.actions';
  
  
  function Rating({ rating, numReviews }) {
    return (
      <Flex alignItems="center">
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

    title= title?.slice(0,25)
    const [styles, setStyles] = useState(false)
    const dispatch = useDispatch()
    const toast = useToast()

    const handleWishlist = (productId) => {
      dispatch(postWishlistAction('63b326771a3dd7f1ca16731a', productId))
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
    
    const handleAddToCart = (productId) => {
        dispatch((postCartAction('63b326771a3dd7f1ca16731a',productId)))
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

    return (
      <Flex alignItems="center" justifyContent="center" bgColor='rgba(255, 255, 255, .25)' _hover={{bgColor:'transparent', boxShadow:'none'}} style={{backdropFilter: 'blur(7px)'}}
         shadow='lg' rounded='xl'
      >
        <Box
          maxW="sm"
          // h={{base:'auto', lg:'500px'}}
          >
  
          <Link href={`/products/${_id}`}>
          <Image
            mixBlendMode='multiply'
            src={src}
            alt={`Picture of ${title}...`}
            roundedTop="lg"
            />
          </Link>
          {
            currPage == 'wishlist' ?
              <Tooltip
              label="Remove"
              bg="white"
              placement={'bottom'}
              color={'gray.800'}
              fontSize={'0.8em'}>
                <DeleteIcon color='red' cursor='pointer' position='absolute' top='3%' left="87%" background='white' fontSize='26px'  padding="5px" borderRadius='13px'/>
              </Tooltip>
              :
              <Tooltip
              label="Add to Favourite"
              bg="white"
              placement={'bottom'}
              color={'gray.800'}
              fontSize={'0.8em'}>
                <Box onClick={() => {
                  handleWishlist(_id)
                  setStyles(!styles)
                }} position='absolute' top='3%' left="87%" background='white'  fontSize='20px'  padding="5px" borderRadius='13px'
                _hover={{bg:'pink'}}>
                  {
                    isWishlist == true ? 
                    <AiFillHeart style={{color: 'red'}}/>
                    :
                    <AiOutlineHeart style={{color:'red'}} />
                  }
                </Box>
              </Tooltip>

          }

          <Box p="6">
            <Box display="flex" alignItems="baseline">
              {available && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                >
                {title}...
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'0.8em'}>
                <IconButton onClick={() => handleAddToCart(_id)} aria-label='add-to-cart' color='#816101' bg='#fdc92e' variant='solid' size='lg' colorScheme='yellow' icon={<FiShoppingCart />}/>
              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={ratings} numReviews={quantity} />
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                  $
                </Box>
                {price}.00
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default ProductCard;