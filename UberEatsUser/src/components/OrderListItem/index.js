import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const OrderListItem = ({ order }) => {
    const navigation = useNavigation()

    return (
        <Pressable onPress={() => navigation.navigate('Order', { id: order.id })}>
            <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                <Image
                    source={{ uri: order.Restaurant.image }}
                    style={{ width: 75, height: 75, marginRight: 5 }}
                />

                <View>
                    <Text style={{ fontWeight: '600', fontSize: 16 }}>{order.Restaurant.name}</Text>
                    <Text style={{ marginVertical: 5 }}>3 items &#8226; $38.45</Text>
                    <Text>2 days ago &#8226; {order.status}</Text>
                </View>

            </View>
            <View style={{ height: 1, backgroundColor: 'lightgrey' }} />
        </Pressable>
    )
}

const styles = StyleSheet.create({

})

export default OrderListItem