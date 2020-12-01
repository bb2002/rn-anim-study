import React from 'react';
import { 
	StyleSheet, View, Animated, Button } from 'react-native';

const BoxMoveAnime = () => {
    const marginTop = new Animated.Value(0)

	const animate = () => {
		Animated.timing(
			marginTop, 
			{
				toValue: 200,
				duration: 500,
				useNativeDriver: false
			}
		).start()
	}

	const goBackAnime = () => {
		Animated.timing(
			marginTop,
			{
				toValue: 0,
				duration: 500
			}
		).start()
	}

	return (
		<View style={Styles.container}>
			<Button title="Animated Box" onPress={animate} />
			<Button title="Go Back" onPress={goBackAnime} />
			<Animated.View style={[Styles.box, { marginTop: marginTop }]} />
		</View>
	)
};

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		paddingTop: 50
	},
	box: {
		width: 150,
		height: 150,
		backgroundColor: "red"
	}
});

export default BoxMoveAnime;