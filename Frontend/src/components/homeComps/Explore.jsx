import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Downarrow from '../../Resources/downarrow.svg'

const Explore = () => {
  return (
    <Box
        w='100%'
        m='auto'
        borderRadius='100px 100px 0 0'
        bg='#00957b'
        h='50vh'
        mt='100px'
    >
        <Box
            bg='#0caf96'
            w='100px'
            h='100px'
            borderRadius='20px'
            transform='rotate(45deg)'
            position='relative'
            left={{base:'42%', lg: '48%'}}
            top='-50px'
            // borderLeft='60px solid transparent'
            // borderRight= '60px solid transparent'
            // borderTop='60px solid #0caf96'
        > 
            <Text color='white' fontFamily='sans-serif' position='absolute' transform='rotate(-45deg) translate(-20px,15px)'>Explore More</Text>
            <Image src={Downarrow} w='70px' transform='rotate(-45deg) translate(0px, 35px)'/>
        </Box>

    </Box>
  )
}

export default Explore
