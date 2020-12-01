import React, { useEffect } from 'react';
import { 
    StyleSheet, View, Animated, Button, TextInput, Text, Easing 
} from 'react-native';

const SeqAnime = () => {
    const animeValue1 = new Animated.Value(-30)
    const animeValue2 = new Animated.Value(-30)
    const animeValue3 = new Animated.Value(-30)

    const animate = () => {
        const createAnime = (value) => {
            return Animated.timing(
                value,
                {
                    toValue: 290,
                    duration: 500,
                    useNativeDriver: false
                }
            )
        }

        Animated.sequence([
            createAnime(animeValue1),
            createAnime(animeValue2),
            createAnime(animeValue3)
        ]).start()
    }

    useEffect(() => {
        animate()
    }, [])

    return (
        <View style={Styles.container}>
            <Animated.Text style={[Styles.text, { marginTop: animeValue1 }]}>
                1
            </Animated.Text>
            <Animated.Text style={[Styles.text, { marginTop: animeValue2 }]}>
                2
            </Animated.Text>
            <Animated.Text style={[Styles.text, { marginTop: animeValue3 }]}>
                3
            </Animated.Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        marginHorizontal: 20,
        fontSize: 26
    }
})

export default SeqAnime;