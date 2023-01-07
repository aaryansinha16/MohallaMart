import {Box} from '@chakra-ui/react'
import Explore from '../../components/homeComps/Explore'
import TopSection from '../../components/homeComps/TopSection'
import Navbar from '../../components/Navbar'

export default function Home() {
    return (
        <Box className='home' w='100%'>
            <Navbar />
            <TopSection />
            <Explore/>
        </Box>
    )
};
