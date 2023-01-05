import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import restaurants from '../../../assets/data/restaurants.json'
import { Ionicons } from '@expo/vector-icons'

const restaurant = restaurants[0]

const RestaurantDetailsScreen = () => {
    return (
        <View style={styles.page}>
            <Image source={{ uri: restaurant.image }} style={styles.image} />

            <Ionicons
                name='arrow-back-circle'
                size={45}
                color='white'
                style={styles.iconContainer}
            />

            <View style={styles.container}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subTitle}>
                    ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} mins
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3
    },
    title: {
        fontSize: 35,
        fontWeight: '600',
        marginVertical: 10
    },
    subTitle: {
        color: '#525252',
        fontSize: 15
    },
    container: {
        margin: 10
    },
    iconContainer: {
        position: 'absolute',
        top: 40,
        left: 10,
    }
})

export default RestaurantDetailsScreen