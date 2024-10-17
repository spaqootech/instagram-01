import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Post from './Post'
import className from 'twrnc'
const AllPosts = () => {
  return (
    <View style={className`flex-1`}>
        <FlatList data='123456789' contentContainerStyle={className`gap-5`} renderItem={() =>
             <Post />}/>
    </View>
  )
}

export default AllPosts