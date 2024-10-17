import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import EllipsisIcon from '@/assets/icons/EllipsisIcon'
import HeartIcon from '@/assets/icons/HeartIcon'
import MessageIcon from '@/assets/icons/MessageIcon'
import ShareIcon from '@/assets/icons/ShareIcon'
import BookMarkIcon from '@/assets/icons/BookMarkIcon'
const Post = () => {
  return (
    <View>
        {/* header */}
        <View style={className`flex-row justify-between items-center gap-3`}>
            <Image style={className`h-14 w-14 rounded-full bg-gray-900 border border-white border-2`}/>
            <View style={className`flex-1 `}>
                <Text style={className`text-white text-xl font-semibold`}>down.today</Text>
                <Text style={className`text-white`}>down.today . Orignal audio</Text>
            </View>
            <EllipsisIcon/>
        </View>
        {/* header */}

        <Image style={className`h-100 w-100 m-2 mx-auto bg-gray-900`}/>

        {/* Footer */}
        <View style={className`flex-col justify-between items-start gap-3 p-2`}>
            <View style={className`flex-row justify-between items-center w-full`}>
            <View style={className`flex-row gap-2`}>
                <HeartIcon/>
                <MessageIcon/>
                <ShareIcon/>
            </View>
            <BookMarkIcon/>
            </View>
            <Text style={className`text-white text-lg`}>
                Today News is the best. we are happy to share this.
            </Text>
        </View>
        {/* Footer */}
    </View>
  )
}

export default Post