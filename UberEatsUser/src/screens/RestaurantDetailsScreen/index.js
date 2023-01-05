import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import restaurants from '../../../assets/data/restaurants.json'
import RestaurantHeader from './RestaurantHeader'
import DishListItem from '../../components/DishListItem'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'

const restaurant = restaurants[0]

const RestaurantDetailsScreen = () => {
    return (
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
                data={restaurant.dishes}
                renderItem={({ item }) => (
                    <DishListItem dish={item} />
                )}
            />

            <Ionicons
                name='arrow-back-circle'
                size={45}
                color='white'
                style={styles.iconContainer}
            />
        </View>
    )
}

export default RestaurantDetailsScreen