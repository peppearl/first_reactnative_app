import React from 'react';
import {Modal, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';

export default function CustomModal({contentModal, setModalVisible, modalVisible}) {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={[styles.centeredView, modalVisible ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '']}>
                    <View style={styles.modalView}>
                         <TouchableOpacity style={styles.iconClose}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}>
                             <Icon
                                 reverse
                                 name='x'
                                 type='feather'
                                 color='#6200ee'
                             />
                             </TouchableOpacity>
                        <ScrollView style={styles.scrollModal}>
                            {contentModal}
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        )
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    modalView: {
        marginLeft: 30,
        marginBottom: 50,
        marginRight: 30,
        paddingLeft: 35,
        paddingRight: 35,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        maxHeight:"80%"
    },
    iconClose: {
        position: 'relative',
        left: 150,
        bottom: 35,
    },
    scrollModal: {
        position: 'relative',
        bottom: 35,
        flexGrow: 0,
        width: 235
    }
});