import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import className from 'twrnc'
import HomeIcon from '@/assets/icons/HomeIcon'
import SearchIcon from '@/assets/icons/SearchIcon'
import CreateIcon from '@/assets/icons/CreateIcon'
import ReelsIcon from '@/assets/icons/ReelsIcon'
import ProfileIcon from '@/assets/icons/ProfileIcon'

const HomeIconFun = () => {
    return(
        <HomeIcon/>
    )
}

const SearchIconFun = () => {
    return(
        <SearchIcon/>
    )
}

const CreateIconFun = () => {
    return(
        <CreateIcon/>
    )
}

const ReelsIconFun = () => {
    return(
        <ReelsIcon/>
    )
}

const ProfileIconFun = () => {
    return(
        <ProfileIcon/>
    )
}

const Layout = () => {
  return (
    <Tabs sceneContainerStyle={className`bg-black`} screenOptions={{
        tabBarStyle:{
            backgroundColor:'black',
            height:80,
            padding:20,
        },
        tabBarLabelStyle:{
            display:'none'
        },
        headerShown:false
    }}>

        <Tabs.Screen name="index" options={{ 
            tabBarIcon: HomeIconFun,
            headerTitle:'home'
         }} />
        <Tabs.Screen name="search" options={{ 
            tabBarIcon: SearchIconFun
         }} />
        <Tabs.Screen name="create" options={{ 
            tabBarIcon: CreateIconFun
         }} />
        <Tabs.Screen name="reels" options={{ 
            tabBarIcon: ReelsIconFun
         }} />
        <Tabs.Screen name="profile" options={{ 
            tabBarIcon: ProfileIconFun
         }} />

    </Tabs>
  )
}

export default Layout