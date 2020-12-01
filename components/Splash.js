import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Animated, Button, TextInput, Text, Easing } from 'react-native';

const Splash = () => {
    const [loading, setLoading] = useState(true)

    const animatedRotate = new Animated.Value(0)

    const animate = () => {
        Animated.loop(
            Animated.timing(
                animatedRotate,
                {
                    toValue: 1,
                    duration: 1800,
                    easing: Easing.linear,
                    useNativeDriver: true
                }
            )
        ).start()
    }

    const rotation = animatedRotate.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"]
    })

    useEffect(() => {
        animate()
        setTimeout(
            () => { setLoading(false) },
            7000
        )
    }, [loading])

    return (
        <View style={Styles.container}>
            {
                loading ? 
                ( <Animated.Image source={require("../assets/guruguru.png")} style={{width: 40, height: 40, transform: [{ rotate: rotation }]}} /> ) :
                ( <Text>프로세카에 오신것을 환영합니다.</Text> )
            }
            <Button title="로딩" onPress={() => setLoading(true)} />
        </View>

    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        paddingTop: 50
    }
})

export default Splash;