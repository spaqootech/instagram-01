import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Status from './Status'
import className from 'twrnc'
const AllStatus = () => {
  return (
    <View>
      <FlatList horizontal contentContainerStyle={className`gap-5 p-2`} data='123456789' renderItem={() => 
        (
          <Status/>
        )}/>
    </View>
  )
}

export default AllStatus