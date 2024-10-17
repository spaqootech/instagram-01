import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'
import ReelsHeader from '@/components/ReelsHeader'
import Reels from '@/components/Reels'
const reels = () => {
  return (
    <View style={className`flex-1`}>
      <ReelsHeader/>
      <Reels/>
    </View>
  )
}

export default reels