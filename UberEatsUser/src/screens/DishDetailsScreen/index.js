import { View, Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Entypo } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { DataStore } from 'aws-amplify'
import { Dish } from '../../models'
import { useBasketContext } from '../../context/BasketContext'


const DishDetailsScreen = () => {
    const [dish, setDish] = useState(null)
    const [quantity, setQuantity] = useState(1)

    const { addDishToBasket } = useBasketContext()

    const navigation = useNavigation()
    const route = useRoute()
    const id = route.params?.id

    useEffect(() => {
        if (id) {
            DataStore.query(Dish, id).then(setDish)
        }
    }, [id])

    const onAddToBasket = async () => {
        await addDishToBasket(dish, quantity)
        navigation.goBack()
    }

    const onMinus = () => {
        setQuantity(Math.max(quantity - 1, 1))
    }

    const onPlus = () => {
        setQuantity(quantity + 1)
    }

    const getTotal = () => {
        return (dish.price * quantity).toFixed(2)
    }

    if (!dish) {
        return <ActivityIndicator size='large' color='grey' style={{ marginTop: 50 }} />
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

            <Pressable style={styles.button} onPress={onAddToBasket}>
                <Text style={styles.buttonText}>Add {quantity} item{quantity === 1 ? '' : 's'} to basket &#8226; (${getTotal()})</Text>
            </Pressable>
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