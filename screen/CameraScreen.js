import React, { useState, useEffect, useRef } from 'react'
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { Camera } from 'expo-camera'
import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
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
        flex: 0.35,
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: "#fff",
        height: 70,
        width: 70,
        borderRadius: 100,
        marginHorizontal: 31,
        position: "relative",
        bottom: 10,
        left: 25,
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
        alignItems: 'center',
        position: "relative",
        bottom: 30
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
})
export default function CameraScreen() {
    const [hasPermission, setHasPermission] = useState(null)
    const [lastPicture, setLastPicture] = useState([])
    const [type, setType] = useState(Camera.Constants.Type.back)
    const camera = useRef(null)
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync()
            setHasPermission(status === 'granted')
        })()
    }, [])
    if (hasPermission === null) {
        return <View />
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>
    }
    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} ref={camera}>
                <View style={styles.buttonContainer}>
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
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={async () => {
                            const options = {quality: 0.5, base64: true, skipProcessing: true};
                            camera.current.takePictureAsync(options).then((picture) => {
                                setLastPicture([picture, ...lastPicture])
                            })
                        }}
                        style={styles.capture}
                    />
                </View>
            </Camera>
            <ScrollView horizontal style={{ flexDirection: 'row' }}>
                {
                    lastPicture
                        ? lastPicture.map((picture, index) => (
                            <Image
                                key={index}
                                style={{
                                    resizeMode: 'contain', width: 100, height: 110, marginTop: 40,marginRight: 10,
                                }}
                                source={picture}
                                width={100}
                                height={100}
                            />
                        ))
                        : null
                }
            </ScrollView>
        </View>
    )
}