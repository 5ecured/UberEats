import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RestaurantItem = ({ restaurant }) => {
    const navigation = useNavigation()

    const onPress = () => {
        // The { id: restaurant.id } is for passing information
        navigation.navigate('Restaurant', { id: restaurant.id })
    }

    return (
        <Pressable onPress={onPress} style={styles.restaurantContainer}>
            <Image
                source={{ uri: restaurant.image }}
                style={styles.image}
            />

            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>{restaurant.name}</Text>
                    <Text style={styles.subTitle}>${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} mins</Text>
                </View>
                <View style={styles.rating}>
                    <Text>{restaurant.rating}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    restaurantContainer: {
        width: '100%',
        marginVertical: 10
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
        marginBottom: 5
    },
    title: {
        fontSize: 15,
        fontWeight: '500',
        marginVertical: 5
    },
    subTitle: {
        color: 'grey'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rating: {
        marginLeft: 'auto',
        backgroundColor: 'lightgrey',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    }
});

export default RestaurantItem