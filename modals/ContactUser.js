import React from 'react';
import {StyleSheet, Text, Pressable, View, TextInput} from 'react-native';
import CustomModal from './../modals/CustomModal.js';
import {Formik} from 'formik';
import style from './../modals/ContentModal.component.style.js';

export default function ContactUser({setModalVisible, modalVisible, route}) {
    return (
        <View style={styles.centeredView}>
            <CustomModal
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
                contentModal={<Formik
                    initialValues={{email: ''}}
                    onSubmit={values => console.log(values)}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                        <View>
                            <TextInput style={style.Input}
                                       onChangeText={handleChange('email')}
                                       onBlur={handleBlur('email')}
                                       value={values.email}
                            />
                            <Pressable
                                style={[style.button, style.buttonOpen]} onPress={handleSubmit}><Text
                                style={style.textStyle}>Submit !</Text>
                            </Pressable>
                            <Text>{values.email ? (
                                <Text>Email is defined : {values.email}</Text>
                            ) : (
                                <Text>Email is not defined</Text>
                            )}</Text>
                        </View>
                    )}
                </Formik>}/>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Contactez {route.params.firstname}</Text>
            </Pressable>
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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});
