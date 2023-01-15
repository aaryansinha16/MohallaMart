import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import React, { useState , useEffect } from "react"
import { BsStarFill } from "react-icons/bs"
import {GoPlus} from "react-icons/go"

export function AddReview({handleSubmitReview}) {  
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(8px) hue-rotate(90deg)'
      transition='2s linear'
      // animation={animation}
      />
    )
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    const [fillStar , setFillStar] = useState(Number)
    const [rating,setRating] = useState("")

    const handleChange =(e)=>{
      setRating(e.target.value)
    }

    const submitReview = ()=>{
      handleSubmitReview(rating,fillStar)
      console.log(rating, fillStar)
      onClose()
    }
    useEffect(()=>{

    },[fillStar])
        
    return (
      <>
        <Button
          m='auto'
          // ml='4'
          color='white'
          colorScheme="yellow"
          marginTop={"30px"}
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
          Add Your Review <GoPlus style={{marginLeft:"10px"}}/>
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Your Review Matters To Us!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Box display={"flex"} gap="10px" justifyContent={"center"} marginBottom="20px">
                {Array(5).fill("").map((_, i) => {
                  return <BsStarFill key={i} fontSize="30px" cursor="pointer" color={i < fillStar ? "orange" : "gray"} onClick={()=>(setFillStar(i+1))}/>
                  })}
                </Box>
                <Input type="text" placeholder="Enter Your Review" onChange={handleChange} />
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='blue' mr={3}  onClick={submitReview}>
                Post
                </Button>
                <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
