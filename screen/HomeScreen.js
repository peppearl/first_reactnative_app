import React, {useEffect, useState} from 'react';
import {Button, FlatList, Pressable, StyleSheet, Text, View} from 'react-native';

export default function HomeScreen({navigation}) {
    const [data, setData] = useState(true);

    useEffect(() => {
        fetch('https://pixel-makers.fr/mds/users.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
    }, []);

    return (
        <View>
            <View>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => navigation.navigate('Camera')}>
                    <Text style={styles.textStyle}>Camera</Text>
                </Pressable>
            </View>
            <FlatList
                data={data}
                keyExtractor={({id}) => "id" + id}
                renderItem={({item}) => <Text onPress={() => navigation.navigate('Detail', {
                    firstname: item.firstName,
                    lastname: item.lastName,
                    mail: item.email,
                    pic: item.avatarUrl,
                    age: item.age
                })}
                                              style={styles.item}>{item.firstName}</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginTop: 40,
    },
    item: {
        textAlign: 'center',
        padding: 10,
        fontSize: 70,
        fontWeight: 'bold'
    },
    buttonOpen: {
        backgroundColor: "#6200ee",
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});
