import { VStack } from '@chakra-ui/react'
import React, { memo } from 'react'
import BottomWeather from './BottomWeather'
import TopSec from './TopSec'
import WeatherCard from './WeatherCard'

const MainDash = ({currData, futureData, pollData} ) => {
  return (
    <VStack>
        <TopSec currData={currData}/>
        <WeatherCard currData={currData} pollData={pollData}/>
        <BottomWeather futureData={futureData}/>
    </VStack>
  )
}

export default memo(MainDash) 