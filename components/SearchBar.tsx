import { View, Text, TextInput } from 'react-native'
import React from 'react'
import className from 'twrnc'
const SearchBar = () => {
  return (
    <View style={className`p-5 bg-gray-900`}>
        <TextInput placeholder='Search' style={className`bg-gray-800 p-3 text-white text-xl text-gray-500 rounded-full px-5`}/>
    </View>
  )
}

export default SearchBar