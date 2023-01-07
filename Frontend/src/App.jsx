import { Box, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AllRoutes from './routes/AllRoutes'

function App() {

  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('#f0f1f7', 'green')
  console.log(colorMode)

  return (
    <div className="App">
      {/* <Box bgColor={bg}
          boxShadow="md"
          p="1"
          position="fixed"
          width="100%"
          top='0'
          zIndex='100'
          display={{base: 'none', xl:'block'}}
          >
            <DeskNav/>
      </Box> */}
      {/* <Navbar /> */}

      {/* <Box w='100%' display={{xl: 'none'}} m='auto' mb='-150px' pt={6} pb={6} pl={3} pr={3} bg={bg}>
        <RespNav/>
      </Box> */}


      <AllRoutes/>
      {/* <Button onClick={toggleColorMode} mt='145px'>Toggle</Button> */}

      <Box w='100%'>
        {/* <Footer/> */}
      </Box>
      
    </div>
  )
}

export default App
