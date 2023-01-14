import { Box, Flex, HStack, Progress, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { BsStarFill } from 'react-icons/bs'
import { AddReview } from './AddReview'
import ReviewsCard from './ReviewsCard'

const Reviews = ({reviews, sum5, sum1, sum2, sum3, sum4, data, handleSubmitReview}) => {
  
  // console.log(sum5,'SUM5').
  

  return (
    <Box
      as={Flex}
      flexDir='column'
      w='100%'
      m='auto'
      borderRadius='100px 100px 100px 100px'
      bg='#00957b'
      // h='500px'
      mt='60px'
      pt='60px'
      pb='60px'
      alignItems='center'
    >
      <VStack
        w='70%'
        m='auto'
        bg='white'
        alignItems='center'
        borderRadius='20px'
        p={4}
        // position='relative'
        // top='100px'
      >
        <Text fontSize='22px' color='black' fontFamily='sans-serif'>Customer Reviews</Text>
        <Box display="flex" mt="2" alignItems="center" gap="5px" bg='gray.200' borderRadius='20px' p={4}>
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
        <VStack w='90%' m='auto' color='black'>
          <HStack w='100%' justifyContent='space-around'>
            <Flex alignItems='center' gap='2px' w='25px' justifyContent='flex-start'><Text>5</Text><BsStarFill color='orange'/></Flex>
            <Box w='80%' bg='gray.200' h='14px' borderRadius='10px'>
              <Box bg='green.300' w={`${(sum5/reviews?.reviews.length) * 100}%`} h='14px' borderRadius='10px'></Box>
            </Box>
            <Text fontSize='14px'>{sum5}Reviews</Text>
          </HStack>
          <HStack w='100%' justifyContent='space-around'>
            <Flex alignItems='center' gap='2px' w='25px' justifyContent='flex-start'><Text>4</Text><BsStarFill color='orange'/></Flex>
            <Box w='80%' bg='gray.200' h='14px' borderRadius='10px'>
              <Box bg='green.300' w={`${(sum4/reviews?.reviews.length) * 100}%`} h='14px' borderRadius='10px'></Box>
            </Box>
            <Text fontSize='14px'>{sum4}Reviews</Text>
          </HStack>
          <HStack w='100%' justifyContent='space-around'>
            <Flex alignItems='center' gap='2px' w='25px' justifyContent='flex-start'><Text>3</Text><BsStarFill color='orange'/></Flex>
            <Box w='80%' bg='gray.200' h='14px' borderRadius='10px'>
              <Box bg='green.300' w={`${(sum3/reviews?.reviews.length) * 100}%`} h='14px' borderRadius='10px'></Box>
            </Box>
            <Text fontSize='14px'>{sum3}Reviews</Text>
          </HStack>
          <HStack w='100%' justifyContent='space-around'>
            <Flex alignItems='center' gap='2px' w='25px' justifyContent='flex-start'><Text>2</Text><BsStarFill color='orange'/></Flex>
            <Box w='80%' bg='gray.200' h='14px' borderRadius='10px'>
              <Box bg='gold' w={`${(sum2/reviews?.reviews.length) * 100}%`} h='14px' borderRadius='10px'></Box>
            </Box>
            <Text fontSize='14px'>{sum2}Reviews</Text>
          </HStack>
          <HStack w='100%' justifyContent='space-around'>
            <Flex alignItems='center' gap='2px' w='25px' justifyContent='flex-start'><Text>1</Text><BsStarFill color='orange'/></Flex>
            <Box w='80%' bg='gray.200' h='14px' borderRadius='10px'>
              <Box bg='tomato' w={`${(sum1/reviews?.reviews.length) * 100}%`} h='14px' borderRadius='10px'></Box>
            </Box>
            <Text fontSize='14px'>{sum1}Reviews</Text>
          </HStack>
        </VStack>
      </VStack>

      <AddReview handleSubmitReview={handleSubmitReview}/>

      <VStack w='90%' m='auto' mt='40px' spacing='15px'>
        {
          reviews?.reviews.map((item) => (
            <ReviewsCard  key={item._id} {...item}/>
          ))
        }
      </VStack>
    </Box>
  )
}

export default Reviews
