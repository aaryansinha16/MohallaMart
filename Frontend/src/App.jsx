import { Box, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AllRoutes from './routes/AllRoutes'

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from 'react'

function App() {

  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('#f0f1f7', 'green')
  console.log(colorMode)


  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="App">

      <AllRoutes/>
      {/* <Button onClick={toggleColorMode} mt='145px'>Toggle</Button> */}

      <Box w='100%'>
        {/* <Footer/> */}
      </Box>
      <motion.div
        className="cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
    </div>
  )
}

export default App
