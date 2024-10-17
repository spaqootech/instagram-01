import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
const Status = () => {
  return (
    <View>
      <Image style={className`h-22 w-22 mb-2 rounded-full bg-gray-900 border border-white border-2 p-2`}/>
      <Text style={className`text-white text-center`}>Name</Text>
    </View>
  )
}

export default Status