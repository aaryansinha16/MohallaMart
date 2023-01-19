import { Box, CloseButton, Flex, Link, Select, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { PriceTag } from './PriceTag.jsx'
import { CartProductMeta } from './CartProductMeta'
import { AddReview } from '../SingleProduct/AddReview'


const QuantitySelect = (props) => {
  return (
    <Select
      value={props.value}
      maxW="64px"
      aria-label="Select quantity"
      // focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
      bg='green.300'
      color='white'
      {...props}
    >
      <option value="1" style={{background:'orange', color:'white'}}>1</option>
      <option value="2" style={{background:'orange', color:'white'}}>2</option>
      <option value="3" style={{background:'orange', color:'white'}}>3</option>
      <option value="4" style={{background:'orange', color:'white'}}>4</option>
    </Select>
  )
}

export const CartItem = (props, {setProducts, products}) => {
  const {productId} = props
  const onChangeQuantity = (e) => {
    props.products.map((el) => el.productId == props.productId._id ? el.quantity = e : null)
    props.setProducts(props.products)
    props.setProdRender((prev) => !prev)
  }

  return (
    <>
    <Flex color='white' bg='#fdc92e' direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" boxShadow='lg' px={2} py={3} rounded='2xl'>
     <CartProductMeta
        name={productId.title}
        // description={"Hello world"}
        image={productId.src}
        // isGiftWrapping={isGiftWrapping}
      />

     {/* Desktop */}
      <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>
        {/* <QuantitySelect
          value={productId?.quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value)
          }}
        /> */}
        <Select
          value={props.value}
          maxW="64px"
          aria-label="Select quantity"
          bg='green.300'
          color='white'
          onChange={(e) => onChangeQuantity?.(e.currentTarget.value)}
          // {...props}
        >
          <option value="1" style={{background:'orange', color:'white'}}>1</option>
          <option value="2" style={{background:'orange', color:'white'}}>2</option>
          <option value="3" style={{background:'orange', color:'white'}}>3</option>
          <option value="4" style={{background:'orange', color:'white'}}>4</option>
        </Select>
        <PriceTag price={productId.price} currency={"INR"} />
        <CloseButton aria-label={`Delete ${productId.title} from cart`} onClick={() => props.handleDelete(productId._id)} />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: 'flex', md: 'none' }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          value={props?.products?.quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value)
          }}
        />
        <PriceTag price={productId.price} currency={"INR"} />
      </Flex>  
      {/* <Box w='200px'>
        <AddReview/>
      </Box> */}
    </Flex>
    </>
  )
}