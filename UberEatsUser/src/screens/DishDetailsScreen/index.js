import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import restaurants from '../../../assets/data/restaurants.json'
import { Entypo } from '@expo/vector-icons'

const dish = restaurants[0].dishes[0]

const DishDetailsScreen = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <View style={styles.separator} />

            <View style={styles.row}>
                <Entypo name="minus" size={50} color="black" />
                <Text style={styles.quantity}>1</Text>
                <Entypo name="plus" size={50} color="black" />
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
        fontSize: 30,
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
        justifyContent: 'center',
        marginTop: 50
    },
    quantity: {
        fontSize: 25,
        marginHorizontal: 30
    }
})

export default DishDetailsScreen