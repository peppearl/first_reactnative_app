import React from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';
import CustomModal from './../modals/CustomModal.js';
import {Formik} from 'formik';
import style from './../modals/ContentModal.component.style.js';
import { TextInput } from 'react-native-paper';

export default function ContactUser({setModalVisible, modalVisible, route}) {
    return (
        <View style={styles.centeredView}>
            <CustomModal
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
                contentModal={<Formik
                    initialValues={{email: '', firstname: '', lastname: '', phone: ''}}
                    onSubmit={values => console.log(values)}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                        <View>
                            <Text h2
                                  style={style.h2Style}
                            >Formulaire de contact</Text>
                            <TextInput style={style.Input}
                                       label='Prénom'
                                       mode='outlined'
                                       placeholder='Rentrez votre prénom'
                                       selectionColor='#6200ee'
                                       underlineColor='#6200ee'
                                       onChangeText={handleChange('firstname')}
                                       onBlur={handleBlur('firstname')}
                                       value={values.firstname}
                            />
                            <TextInput style={style.Input}
                                       label='Nom'
                                       mode='outlined'
                                       placeholder='Rentrez votre nom'
                                       selectionColor='#6200ee'
                                       underlineColor='#6200ee'
                                       onChangeText={handleChange('lastname')}
                                       onBlur={handleBlur('lastname')}
                                       value={values.lastname}
                            />
                            <TextInput style={style.Input}
                                       label='Email'
                                       mode='outlined'
                                       placeholder='Rentrez votre email'
                                       selectionColor='#6200ee'
                                       underlineColor='#6200ee'
                                       onChangeText={handleChange('email')}
                                       onBlur={handleBlur('email')}
                                       value={values.email}
                            />
                            <TextInput style={style.Input}
                                       label='Numéro de téléphone'
                                       mode='outlined'
                                       placeholder='Rentrez votre téléphone'
                                       selectionColor='#6200ee'
                                       underlineColor='#6200ee'
                                       onChangeText={handleChange('phone')}
                                       onBlur={handleBlur('phone')}
                                       value={values.phone}
                            />
                            <Pressable
                                style={[style.button, style.buttonOpen]} onPress={handleSubmit}><Text
                                style={style.textStyle}>Submit !</Text>
                            </Pressable>
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
        backgroundColor: "#6200ee",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});
