import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

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
            <FlatList
                data={data}
                keyExtractor={({id}) => id}
                renderItem={({item}) => <Text onPress={() => navigation.navigate('Detail', {name: item.firstName})}
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
});
