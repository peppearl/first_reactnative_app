import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({navigation}) {
    return (
      <View>
        <FlatList
        data={[
          {key: 'Chloe'},
          {key: 'Yoann'},
          {key: 'Emilie'},
          {key: 'Jordan'},
          {key: 'Gabrielle'},
          {key: 'Florian'},
          {key: 'Antoine'},
          {key: 'Alexandre'},
        ]}
        renderItem={({item}) => <Text onPress={() => navigation.navigate('Detail', { name: item.key })} style={styles.item}>{item.key}</Text>}
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
    fontSize: 78,
  },
});
