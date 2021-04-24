import {Camera} from "expo-camera";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Icon} from "react-native-elements";
import * as MediaLibrary from "expo-media-library";
import {ScrollView} from "react-native-gesture-handler";
import React, {useEffect, useRef, useState} from "react";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function CameraComponent() {
    const [hasPermission, setHasPermission] = useState(null);
    const [lastPicture, setLastPicture] = useState([]);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const camera = useRef(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });
    }


    /* Problème de permission - Permet d'avoir la caméra après avoir autoriser les permissions */

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync()
            const { media } = MediaLibrary.requestPermissionsAsync()
        })()
    }, [])

    if (MediaLibrary.getPermissionsAsync() === null) {
        (async () => {
            const {status} = Camera.requestPermissionsAsync()
            const {media} = MediaLibrary.requestPermissionsAsync()
            setHasPermission(status && media === 'all')
        })()
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>

    }

    /* Permet d'avoir les messages de permissions mais ensuite ça ne marche pas */
    /*
            useEffect(() => {
                (async () => {
                    const { status } = await Camera.requestPermissionsAsync()
                    const { status2 } = MediaLibrary.requestPermissionsAsync()
                    setHasPermission(status && status2 === 'all')
                })()
            }, [])
            if (hasPermission === null ) {
                return <View />
            }
            if (hasPermission === false) {
                return <Text>No access to camera</Text>
            }

    */
    const storeData = async (value) => {
        try {
            const photoUrl = JSON.stringify(value)
            await AsyncStorage.setItem('@picture', photoUrl)
            console.log('success')
        } catch (e) {
            console.log('error')
            return <Text>Did not save the photo</Text>
        }
    }

    const getData = async () => {
        try {
            const url = await AsyncStorage.getItem('@pictures')
            console.log(url)
            return url != null ? JSON.parse(url) : null;
        } catch (e) {
            console.log('error 2')
            return <Text>Did not retrieve the photo</Text>
        }
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} ref={camera} flashMode={Camera.Constants.FlashMode.auto}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button2}
                        onPress={pickImage}>
                        <Icon
                            name='image'
                            type='feather'
                            color='white'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={async () => {
                            const options = {quality: 0.5, base64: true, skipProcessing: true};
                            camera.current.takePictureAsync(options).then((picture) => {
                                setLastPicture([picture, ...lastPicture])
                                MediaLibrary.saveToLibraryAsync(picture.uri)
                                storeData(picture.uri)
                            })
                        }}
                        style={styles.capture}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back,
                            )
                        }}
                    >
                        <Icon
                            name='refresh-cw'
                            type='feather'
                            color='white'
                        />
                    </TouchableOpacity>
                </View>
            </Camera>
            <ScrollView horizontal style={{flexDirection: 'row'}}>
                {
                    lastPicture && !getData
                        ?
                        lastPicture.map((picture, uri) => (
                            <View key={uri}>
                                <Image
                                    style={{
                                        resizeMode: 'contain',
                                        width: 100,
                                        height: 150,
                                        marginTop: 40,
                                        marginRight: 10,
                                    }}
                                    source={picture}
                                    width={100}
                                    height={100}
                                />
                                <Icon
                                    name='cloud-off'
                                    type='feather'
                                    color='black'
                                />
                            </View>
                        ))

                        :

                        lastPicture && getData
                            ?
                            lastPicture.map((picture, uri) => (
                                <View
                                    key={uri}
                                >
                                    <Image
                                        style={{
                                            resizeMode: 'contain', width: 100, height: 150, marginTop: 40, marginRight: 10,
                                        }}
                                        source={picture}
                                        width={100}
                                        height={100}
                                    />
                                    <Icon
                                        name='cloud'
                                        type='feather'
                                        color='black'
                                    />
                                </View>
                            ))
                            :
                            null
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        alignSelf: 'center',
        width: 300,
        height: 400,
    },
    capture: {
        flex: 0.4,
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: "#fff",
        height: 70,
        width: 70,
        borderRadius: 100,
        marginHorizontal: 31,
        position: "relative",
        bottom: 10,
        left: 40,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.2,
        alignSelf: 'flex-end',
        position: "relative",
        bottom: 30,
        left: 60
    },
    button2: {
        flex: 0,
        alignSelf: 'flex-end',
        position: "relative",
        bottom: 30,
        left: 10
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
})