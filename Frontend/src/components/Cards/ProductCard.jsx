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
  } from '@chakra-ui/react';
import { useContext } from 'react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
import { addToCart } from '../../API/api';
import {Link} from 'react-router-dom'
  
  // interface RatingProps {
  //   rating: number;
  //   numReviews: number;
  // }
  
  function Rating({ rating, numReviews }) {
    // console.log(rating, typeof numReviews)
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
    id,
    image,
    name,
    brand,
    available,
    price,
    rating,
    number_of_reviews,
    description
  }) {

    const handleAddCart =() => {

    }
    
    return (
      <Flex p={3}  w='98%' alignItems="center" justifyContent="center" >
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          _hover={{boxShadow: '2xl'}}>
          {available && (
            <Circle
            size="10px"
            bg="red.200"
            />
            )}
  
          <Link to={`/products/${id}`}>
          <Image
            src="https://burst.shopifycdn.com/photos/set-of-custom-enamel-pins.jpg?width=373&format=pjpg&exif=1&iptc=1"
            alt={`Picture of ${name}`}
            roundedTop="lg"
            />
          </Link>
  
          <Box p="6">
            <Box d="flex" alignItems="baseline">
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
                // isTruncated
                >
                {name}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'0.8em'}>
                <IconButton onClick={() => {
                  handleAddCart(name, brand,price, description ,rating ,number_of_reviews,available, image)
                  }} variant='outline' size='lg' icon={<FiShoppingCart h={9} w={9} />}/>
              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={rating} numReviews={number_of_reviews} />
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