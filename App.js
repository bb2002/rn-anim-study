import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import 'react-native-gesture-handler';
import BoxMoveAnime from './components/BoxMoveAnime';
import InputFocus from './components/InputFocus';
import Splash from './components/Splash';
import ManyAnime from './components/ManyAnime';
import SeqAnime from './components/SeqAnime';
import RedBox from './components/RedBox';

const Tab = createBottomTabNavigator ()

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="BoxMoveAnime" component={BoxMoveAnime} options={{title: "박스애니"}} />
				<Tab.Screen name="InputFocus" component={InputFocus} options={{title: "입력포커스"}} />
				<Tab.Screen name="Splash" component={Splash} options={{title: "빙글빙글"}} />
				<Tab.Screen name="ManyAnime" component={ManyAnime} options={{title: "많은애니"}} />
				<Tab.Screen name="SeqAnime" component={SeqAnime} options={{title: "순차애니"}} />
				<Tab.Screen name="RedBox" component={RedBox} options={{title: "빨간상자"}} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}


