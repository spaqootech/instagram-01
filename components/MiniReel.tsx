import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'
import ReelsIcon from '@/assets/icons/ReelsIcon'
const MiniReel = () => {
  return (
    <View style={className`bg-gray-700 h-35 w-35 mx-auto bg-[url('/assets/images/mini-reel.png')] flex-row justify-end p-3`}>
        <ReelsIcon/>
    </View>
  )
}

export default MiniReel