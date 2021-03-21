import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';

//Scrollable Content
//
// React Native Modal supports scrollable content inside the modal box.
// It supports Horizontal scroll too & it can be enabled by setting scrollHorizontal prop to true which is by
// default false. By setting scrollOffset, content gets scrollable, and swipe to close gesture gets disabled.

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
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {contentModal}
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
        marginTop: 22
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
    }
});