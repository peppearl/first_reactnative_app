import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import ContactUser from './../modals/ContactUser.js'

export default function DetailScreen({route}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Image
                style={styles.picture}
                source={{
                    uri: route.params.pic,
                }}
            />
            <Text style={[styles.fullName, styles.TextStyle]}>{route.params.firstname} {route.params.lastname}</Text>
            <Text style={[styles.ageUser, styles.TextStyle]}>{route.params.age} ans</Text>
            <Text style={styles.textPadding10}>{route.params.mail}</Text>
            <ContactUser  setModalVisible={setModalVisible} modalVisible={modalVisible} route={route}/>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    Input: {
        borderWidth: 2,
        borderColor: "#000",
        marginBottom: 10
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    picture: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    TextStyle: {
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold'
    },
    fullName: {
        fontSize: 30
    },
    ageUser: {
        fontSize: 20,
        color: "#F194FF"
    },
    textPadding10: {
        padding: 10
    }
});
