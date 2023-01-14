import { Box, Flex, HStack, chakra, Text, Image, Avatar } from '@chakra-ui/react'
import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import AvatarImg from '../../Resources/avatar.jpg'

const ReviewsCard = ({
    createdAt,
    rating,
    review,
    userId
}) => {

    let date = new Date(createdAt).toDateString()
  return (
    <Flex
        w="100%"
        alignItems="center"
        justifyContent="center"
        >
        <Box
            mx="auto"
            px={8}
            py={4}
            rounded="lg"
            shadow="lg"
            bg="white"    
            w='90%'
        >
            <Flex justifyContent="space-between" alignItems="center">
                <Text
                    px={3}
                    py={1}
                    bg="gray.600"
                    color="gray.100"
                    fontSize="sm"
                    fontWeight="700"
                    rounded="md"
                    _hover={{
                        bg: "gray.500",
                    }}
                    as={Flex}
                    alignItems='center'
                    gap='3px'
                >
                    {rating} <BsStarFill />
                </Text>
                <chakra.span
                    fontSize="sm"
                    color="gray.600"
                    
                >
                    {date}
                </chakra.span>
            </Flex>

            <Box mt={2}>
                <chakra.p
                    mt={4}
                    color="gray.600"
                    
                >
                    {review}
                </chakra.p>
            </Box>

            <Flex justifyContent="space-between" alignItems="center" mt={3}>
                <Flex alignItems="center" justifyContent='flex-start'>
                    <Avatar
                    // mx={0}
                    w='50px'
                    h='50px'
                    // rounded="full"
                    fit="cover"
                    display={{
                        base: "none",
                        sm: "block",
                    }}
                    src={AvatarImg}
                    alt="avatar"
                    />
                    <Text
                    color="gray.700"
                    
                    fontWeight="700"
                    cursor="pointer"
                    textAlign='left'
                    >
                        {userId?.fName}{' '}{userId?.lName}
                    </Text>
                </Flex>
            </Flex>
        </Box>
        </Flex>
  )
}

export default ReviewsCard
