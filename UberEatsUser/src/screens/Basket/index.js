import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import restaurants from '../../../assets/data/restaurants.json'

const restaurant = restaurants[0]

const BasketDishItem = ({ basketDish }) => {
    return (
        <View style={styles.row}>
            <View style={styles.quantityContainer}>
                <Text>1</Text>
            </View>
            <Text style={{ fontWeight: '600' }}>{basketDish.name}</Text>
            <Text style={{ marginLeft: 'auto' }}>${basketDish.price}</Text>
        </View>
    )
}

const Basket = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.name}>{restaurant.name}</Text>

            <Text style={{ fontWeight: 'bold', marginTop: 20, fontSize: 19 }}>Your items</Text>

            <FlatList
                data={restaurant.dishes}
                renderItem={({ item }) => <BasketDishItem basketDish={item} />}
            />

            <View style={styles.separator} />

            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    Create Order
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%',
        paddingVertical: 30,
        padding: 10
    },
    name: {
        fontSize: 24,
        fontWeight: '600',
        marginVertical: 10
    },
    description: {
        color: 'grey'
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgrey',
        marginVertical: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15
    },
    quantity: {
        fontSize: 25,
        marginHorizontal: 30
    },
    button: {
        backgroundColor: 'black',
        marginTop: 'auto',
        padding: 25,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 18
    },
    quantityContainer: {
        backgroundColor: 'lightgrey',
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3
    }
})

export default Basket