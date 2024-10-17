import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SearchBar from '@/components/SearchBar'
import MiniReel from '@/components/MiniReel'
import className from 'twrnc'
const search = () => {
  return (
    <ScrollView style={className`flex-1 gap-1`}>
      <SearchBar/>
      <View style={className`flex-row`}>
      <MiniReel/>
      <MiniReel/>
      <MiniReel/>
      </View>

      <View style={className`flex-row`}>
      <MiniReel/>
      <MiniReel/>
      <MiniReel/>
      </View>
      
      <View style={className`flex-row`}>
      <MiniReel/>
      <MiniReel/>
      <MiniReel/>
      </View>
      
      <View style={className`flex-row`}>
      <MiniReel/>
      <MiniReel/>
      <MiniReel/>
      </View>
      
      <View style={className`flex-row`}>
      <MiniReel/>
      <MiniReel/>
      <MiniReel/>
      </View>
      
      <View style={className`flex-row`}>
      <MiniReel/>
      <MiniReel/>
      <MiniReel/>
      </View>

    </ScrollView>
  )
}

export default search