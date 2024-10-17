import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ReelItem from './ReelItem'
import className from 'twrnc'
const Reels = () => {
  return (
    <View style={className`flex-1`}>
        <FlatList contentContainerStyle={className`gap-2`} data='123456789' renderItem={() => <ReelItem />}/>
    </View>
  )
}

export default Reels