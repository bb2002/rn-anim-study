import React, { useEffect } from 'react';
import { 
    StyleSheet, View, Animated, Button, TextInput, Text, Easing 
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const ManyAnime = () => {
    const animatedTitle     = new Animated.Value(-200)
    const animatedSub       = new Animated.Value(600)
    const animatedButton    = new Animated.Value(800)

    const animate = () => {
        Animated.parallel([
            Animated.timing(
                animatedTitle,
                {
                    toValue: 200,
                    duration: 800,
                    useNativeDriver: false
                }
            ),
            Animated.timing(
                animatedSub,
                {
                    toValue: 0,
                    duration: 1400,
                    delay: 800,
                    useNativeDriver: false
                }
            ),
            Animated.timing(
                animatedButton,
                {
                    toValue: 0,
                    duration: 1000,
                    delay: 2200,
                    useNativeDriver: false
                }
            )
        ]).start()
    }

    useEffect(() => {
        animate()
    }, [])

    return (
        <View style={Styles.container}>
            <Animated.Text style={[Styles.title, { marginTop: animatedTitle }]}>
                환영합니다.
            </Animated.Text>
            <Animated.Text style={[Styles.subTitle, { marginLeft: animatedSub }]}>
                모든것을 마이크로소프트에게 맡기기
            </Animated.Text>
            <Animated.Text style={[Styles.button, { marginTop: animatedButton }]}>
                <TouchableHighlight onPress={() => {alert("군침 싸악 도는 맡기기")}}>
                    <Text style={Styles.button}>후.. 시작해볼까?</Text>
                </TouchableHighlight>
            </Animated.Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        marginBottom: 12
    },
    subTitle: {
        width: "100%",
        textAlign: "center",
        fontSize: 18,
        opacity: 0.8
    },
    button: {
        marginTop: 25,
        backgroundColor: "#DDD",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10
    }
})

export default ManyAnime;