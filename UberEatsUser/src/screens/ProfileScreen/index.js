import { Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Auth, DataStore } from "aws-amplify";
import { User } from "../../models";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const { sub, setDbUser, dbUser } = useAuthContext()

  const [name, setName] = useState(dbUser?.name || '');
  const [address, setAddress] = useState(dbUser?.address || '');
  const [lat, setLat] = useState(dbUser?.lat + '' || '0');
  const [lng, setLng] = useState(dbUser?.lng + '' || '0');

  const navigation = useNavigation()

  const onSave = async () => {
    if (dbUser) {
      await updateUser()
    } else {
      await createUser()
    }
    navigation.goBack()
  }

  const createUser = async () => {
    try {
      const user = await DataStore.save(new User({ name, address, lat: parseFloat(lat), lng: parseFloat(lng), sub }))
      setDbUser(user)
    } catch (error) {
      Alert.alert('error create user', error.message)
    }
  }

  const updateUser = async () => {
    try {
      const user = await DataStore.save(
        User.copyOf(dbUser, updated => {
          //DataStore objects are immutable so we have to make a copyOf an existing one. then we simply update each field 
          //according to the 4 fields we have in useState
          updated.name = name
          updated.address = address
          updated.lat = parseFloat(lat)
          updated.lng = parseFloat(lng)
        })
      )
      
      //update our context
      setDbUser(user)
    } catch (error) {
      Alert.alert('error update user', error.message)
    }
  }

  return (
    <SafeAreaView>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={setLat}
        placeholder="Latitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={lng}
        onChangeText={setLng}
        placeholder="Longitude"
        style={styles.input}
        keyboardType="numeric"

      />
      <Button onPress={onSave} title="Save" />
      <Text
        style={{ textAlign: 'center', color: 'red', margin: 10 }}
        onPress={() => Auth.signOut()}
      >
        Sign out
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
  },
});

export default Profile;
