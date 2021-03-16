import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Button, TextInput} from 'react-native';
import {Formik} from 'formik';

export default function DetailScreen({route}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
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
                <Text style={styles.textStyle}>Contactez {route.params.name}</Text>
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
                <Button onPress={handleSubmit} title="Submit"/>
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
    }
});
