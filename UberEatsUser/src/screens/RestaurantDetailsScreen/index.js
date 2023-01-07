import { View, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import RestaurantHeader from './RestaurantHeader'
import DishListItem from '../../components/DishListItem'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'
import { useRoute, useNavigation } from '@react-navigation/native'
import { DataStore } from 'aws-amplify'
import { Restaurant, Dish } from '../../models'


const RestaurantDetailsScreen = () => {
    const [restaurant, setRestaurant] = useState(null)
    const [dishes, setDishes] = useState([])

    const navigation = useNavigation()
    const route = useRoute()
    const id = route.params?.id

    useEffect(() => {
        if (!id) {
            return
        }

        // The id below means to query a single Restaurant based on the id we receive above from useRoute
        DataStore.query(Restaurant, id).then(setRestaurant)

        // The second argument is to filter the dishes that belong to a single restaurant with the same id from useRoute.
        // 'eq' is equal. so a dish with a restID that is equal to the id from useRoute
        DataStore.query(Dish, dish => dish.restaurantID.eq(id)).then(setDishes)
    }, [id])

    if (!restaurant) {
        return (
            <ActivityIndicator size='large' color='grey' style={{ marginTop: 50 }} />
        )
    }


    return (
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
                data={dishes}
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