import React, { Component } from 'react';
import { 
    StyleSheet, View, Animated, Button, TextInput, Text, Easing 
} from 'react-native';


const makeRand = () => {
    return Math.floor(Math.random() * (254))
}

class RedBox extends Component {

    constructor() {
        super()

        for(let i = 0; i < 100; ++i) {
            this.animatedValues[i] = new Animated.Value(0)
        }

        this.animations = this.animatedValues.map(value => Animated.timing(
            value,
            {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true
            }
        ))
    }

    animatedValues = []
    animations = []

    animate = () => {
        Animated.stagger(15, this.animations).start()
        
    }

    componentDidMount() {
        this.animate()
    }

    render() {
        return (
            <View style={this.Styles.container}>
                {
                    this.animatedValues.map((value, index) => 
                        <Animated.View key={index} style={[{opacity: value}, this.Styles.box]} />)
                }

                <Button title="return" onPress={() => this.animatedValues.forEach(a => a.setValue(0))} />
                <Button title="start" onPress={this.animate} />
            </View>
        );
    }

    Styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            backgroundColor: "black"
        },
        box: {
            width: 15,
            height: 15,
            margin: 0.5,
            backgroundColor: `rgb(${makeRand()}, ${makeRand()}, ${makeRand()})`
        }
    })
}

export default RedBox;