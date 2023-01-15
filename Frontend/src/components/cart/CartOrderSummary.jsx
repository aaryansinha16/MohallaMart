import {
    Button,
    Flex,
    Heading,
    Input,
    Link,
    ModalOverlay,
    Stack,
    Text,
    useColorModeValue as mode,
    useDisclosure,
    VStack,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaArrowRight } from 'react-icons/fa'
  import { formatPrice } from './PriceTag.jsx'
  import {useRef} from 'react'
import Login from '../../routes/Login.jsx'
  
  // type OrderSummaryItemProps = {
  //   label: string
  //   value?: string
  //   children?: React.ReactNode
  // }
  
  const OrderSummaryItem = (props) => {
    const { label, value, children } = props
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium">{value}</Text> : children}
      </Flex>
    )
  }
  
  export const CartOrderSummary = ({makePayment, totalCost}) => {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const contactRef = useRef(null)
    const [name, setName] = React.useState("")

    React.useEffect(() => {
        console.log(nameRef.current.value.length, 'namefer')
    }, [])

    const OverlayOne = () => (
      <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    return (
      <Stack bg='#ffe058'
      color='#816101'
        // color='purple'
      style={{backdropFilter: 'blur(4px)'}}  spacing="8" rounded="lg" padding="8" width="full">
        <Heading size="md">Order Summary</Heading>
  
        <Stack spacing="6">
          <OrderSummaryItem label="Subtotal" value={formatPrice(totalCost)} />
          
          <Flex flexDir='column' gap={3}>
            <VStack spacing={0} align='flex-start'>
                <label style={{fontSize: '14px'}}>Name</label>
                <Input bg='green.300' _placeholder={{color:'white'}} color='white' ref={nameRef} placeholder='Enter Name...' onChange={(e) => setName(e.target.value)}/>
            </VStack>
            <VStack spacing={0} align='flex-start'>
                <label style={{fontSize: '14px'}}>Email</label>
                <Input bg='green.300' _placeholder={{color:'white'}} color='white' ref={emailRef} placeholder='Enter Email...'/>
            </VStack>
            <VStack spacing={0} align='flex-start'>
                <label style={{fontSize: '14px'}}>Contact</label>
                <Input bg='green.300' _placeholder={{color:'white'}} color='white' ref={contactRef} placeholder='Enter Contact...'/>
            </VStack>
          </Flex>

          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              {formatPrice(totalCost)}
            </Text>
          </Flex>
        </Stack>
        <Button disabled={name.length == 0 ? true : false} color='white' bg='green.300' variant='solid' size="lg" fontSize="md" rightIcon={<FaArrowRight />} onClick={() => {
            let localData = JSON.parse(localStorage.getItem("userData")) || undefined
            if(localData != undefined) makePayment(nameRef.current.value, emailRef.current.value, contactRef.current.value, totalCost)
            else {
              onOpen()
              setOverlay(<OverlayOne />)
            }
          }}>
          Purchase
        </Button>
        <Login isOpen={isOpen} onClose={onClose}/>
      </Stack>
    )
  }