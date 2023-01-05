import { View, FlatList } from 'react-native'
import React from 'react'
import restaurants from '../../../assets/data/restaurants.json'
import RestaurantHeader from './RestaurantHeader'
import DishListItem from '../../components/DishListItem'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'
import { useRoute, useNavigation } from '@react-navigation/native'

const restaurant = restaurants[0]

const RestaurantDetailsScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const id = route.params.id
    console.warn(id)

    return (
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
                data={restaurant.dishes}
                renderItem={({ item }) => (
                    <DishListItem dish={item} />
                )}
                keyExtractor={(item) => item.name}
            />

            <Ionicons
                name='arrow-back-circle'
                size={45}
                color='white'
                style={styles.iconContainer}
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default RestaurantDetailsScreen