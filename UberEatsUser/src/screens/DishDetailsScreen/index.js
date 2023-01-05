import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import restaurants from '../../../assets/data/restaurants.json'
import { Entypo } from '@expo/vector-icons'

const dish = restaurants[0].dishes[0]

const DishDetailsScreen = () => {
    const [quantity, setQuantity] = useState(1)

    const onMinus = () => {
        setQuantity(Math.max(quantity - 1, 1))
    }

    const onPlus = () => {
        setQuantity(quantity + 1)
    }

    const getTotal = () => {
        return (dish.price * quantity).toFixed(2)
    }

    return (
        <View style={styles.page}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <View style={styles.separator} />

            <View style={styles.row}>
                <Entypo name="minus" size={50} color="black" onPress={onMinus} />
                <Text style={styles.quantity}>{quantity}</Text>
                <Entypo name="plus" size={50} color="black" onPress={onPlus} />
            </View>

            <View style={styles.button}>
                <Text style={styles.buttonText}>Add {quantity} item{quantity === 1 ? '' : 's'} to basket &#8226; (${getTotal()})</Text>
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
    }
})

export default DishDetailsScreen