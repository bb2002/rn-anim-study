import React, { useRef } from 'react';
import { StyleSheet, View, Animated, Button, TextInput, Text } from 'react-native';

const InputFocus = () => {
    const animatedWidth = new Animated.Value(200)

    const anime = (value) => {
        Animated.timing(
            animatedWidth,
            {
                toValue: value,
                duration: 750,
                useNativeDriver: false
            }
        ).start()
    }

    const input = useRef()

    return (
        <View style={Styles.container}>
            <Animated.View style={{ width: animatedWidth }}>
                <TextInput style={[Styles.input]} onBlur={() => anime(200)} onFocus={() => anime(325)} ref={input} />
                <Button title="전송" onPress={() => input.current.blur()} />
            </Animated.View>
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 50
    },
    input: {
        height: 50,
        marginHorizontal: 15,
        backgroundColor: "#EDEDED",
        marginTop: 10,
        paddingHorizontal: 9
    }
})

export default InputFocus;