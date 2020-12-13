import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { PostList } from '../components/PostList';
import { DATA } from '../data'

export const MainScreen = ({ navigation }) => {
    const openPostHandler = post => {
        navigation.navigate('Post', { 
            postId: post.id,
            date: post.date,
            booked: post.booked
        })
    }

    return <PostList data={ DATA } onOpen={ openPostHandler } />
}

MainScreen.navigationOptions = ({ navigation }) => ({
    title: 'My Blog',
    headerRight: () => (
        <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
            <Item 
                title='Take photo'
                iconName='ios-camera'
                onPress={ () => navigation.push('Create') } />
        </HeaderButtons>
    ),
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
            <Item 
                title='Toggle Drawer'
                iconName='ios-menu'
                onPress={ () => navigation.toggleDrawer() } />
        </HeaderButtons>
    ),
})