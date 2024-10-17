import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'
import CameraIcon from '@/assets/icons/CameraIcon'
const ReelsHeader = () => {
  return (
    <View style={className`flex-row justify-between p-2`}>
    <Text style={className`text-white text-2xl font-semibold`}>Reels</Text>
    <CameraIcon/>
    
  </View>
  )
}

export default ReelsHeader