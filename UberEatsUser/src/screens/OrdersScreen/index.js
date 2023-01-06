import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import OrderListItem from '../../components/OrderListItem'
import orders from '../../../assets/data/orders.json'

const OrdersScreen = () => {
    return (
        <View style={{ flex: 1, width: '100%' }}>
            <FlatList
                data={orders}
                renderItem={({ item }) => <OrderListItem order={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default OrdersScreen