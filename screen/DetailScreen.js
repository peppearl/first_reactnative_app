import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Image} from 'react-native';
import {Formik} from 'formik';

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
            <Text style={[styles.ageUser, styles.TextStyle]}>{route.params.age}</Text>
            <Text style={styles.textPadding10}>{route.params.mail}</Text>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <MyReactNativeForm/>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Contactez {route.params.firstname}</Text>
            </Pressable>
        </View>
    )
}

export const MyReactNativeForm = props => (
    <Formik
        initialValues={{email: ''}}
        onSubmit={values => console.log(values)}
    >
        {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
                <TextInput style={styles.Input}
                           onChangeText={handleChange('email')}
                           onBlur={handleBlur('email')}
                           value={values.email}
                />
                <Pressable
                    style={[styles.button, styles.buttonOpen]} onPress={handleSubmit}><Text
                    style={styles.textStyle}>Submit !</Text>
                </Pressable>
                <Text>{values.email ? (
                    <Text>Email is defined : {values.email}</Text>
                ) : (
                    <Text>Email is not defined</Text>
                )}</Text>
            </View>
        )}
    </Formik>
);

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
