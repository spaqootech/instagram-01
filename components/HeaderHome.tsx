import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'
import HeartIcon from '@/assets/icons/HeartIcon'
import MessageIcon from '@/assets/icons/MessageIcon'
const HeaderHome = () => {
  return (
    <View style={className`bg-black p-2 flex-row items-center w-full justify-between py-3`}>
      <Text style={className`text-white font-semibold text-3xl`}>Instagram</Text>

      <View style={className`flex-row items-center gap-3`}>
        <HeartIcon/>
        <MessageIcon/>
      </View>
    </View>
  )
}

export default HeaderHome