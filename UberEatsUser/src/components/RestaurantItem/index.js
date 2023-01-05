import { StyleSheet, Text, View, Image } from 'react-native';

const RestaurantItem = () => {
    return (
        <View style={styles.restaurantContainer}>
            <Image
                source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg' }}
                style={styles.image}
            />
            <Text style={styles.title}>El Cabo Coffe Bar Tres De Mayo</Text>
            <Text style={styles.subTitle}>$1.99 15-30 mins</Text>
        </View>
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
    }
});

export default RestaurantItem