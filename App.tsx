import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet, Button, View, Platform, StatusBar } from "react-native";

import Details from "./Details";

import Home from "./Home";
import Settings from "./Settings";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Details" component={Details} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
