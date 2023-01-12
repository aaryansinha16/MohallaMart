// import { Tab, TabList, TabPanel, TabPanels, Tabs, VStack, Box, Heading, Text, useToast, Button } from '@chakra-ui/react'
import { Box, useToast } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import DeskDash from '../../components/dashboardComp/DeskDash'

import MainDash from '../../components/dashboardComp/mainDash/MainDash'
import RespDash from '../../components/dashboardComp/RespDash'

const Admin = ({props}) => {
   const [users ,setUsers] = useState([]) 
   const [brands, setBrands] = useState([])
   const [products, SetProducts] = useState([])
   const [change, setChange] = useState(false)
   const [role, setRole] = useState("")

   // var token = JSON.parse(props).token
   // console.log( 'PROPS, ADMIN', token)

   useEffect(() => {
      // axios.get('/api/users/rolecheck').then((res) => setRole(res.data))
   }, [])

   const toast = useToast()

   const handleCreateProduct = (title, price, src, description, brand) => {
      console.log(title, price, typeof price, description)
      axios.post('/api/products', {title, price, src, description}).then((res) => {
         console.log(res.data,'created product')
         toast({
            title: 'Product Created.',
            description: "Congrats! your new product has been added.",
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
      }).catch((e) => {
         console.log(e, 'error')
         toast({
            title: 'Something went wrong.',
            description: "Oops!, please try again.",
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
      })
      setChange(!change)
   }

   const handleCreateBrand = (name, logo) => {
      axios.post('/api/brands', {name, logo}).then((res) => {
         console.log(res, 'brand created')
      }).catch((e) => {
         console.log(e, 'error creating brand')
      })

      setChange(!change)
   }


   const [allOrders, setAllOrders] = useState([])
   const [allBrands, setAllBrands] = useState([])

   const handleLogout = () => {
      axios.get('/api/users/logout').then((res) => {
         console.log(res, 'LOGOUT SUCCESS')
         toast({
             title: 'Logout Successfull.',
             description: "You have logged out successfully.",
             status: 'info',
             duration: 9000,
             isClosable: true,
           })
     })
   }


  return (
    <Box className='dashboard'>
      <DeskDash />
      <RespDash />
    </Box>
  )
}

export default Admin