import { View, Text, FlatList } from 'react-native'
import React from 'react'
import HeaderHome from '@/components/HeaderHome'
import className from 'twrnc'
import Status from '@/components/Status'
import AllStatus from '@/components/AllStatus'
import Post from '@/components/Post'
import AllPosts from '@/components/AllPosts'
const index = () => {
  return (
    <View style={className`flex-1`}>
      <HeaderHome/>
      <AllStatus/>
      <AllPosts/>
    </View>
  )
}

export default index