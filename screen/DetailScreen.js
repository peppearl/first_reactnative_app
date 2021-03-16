import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DetailScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.item}>Detail Screen</Text>
      </View>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  item: {
    textAlign: 'center',
    padding: 10,
    fontSize: 78,
  },
});
