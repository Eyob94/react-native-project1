import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet, Button, View, Platform, StatusBar } from "react-native";

import Details from "./Details";

import Home from "./Home";
import collect from "./Input";
import Settings from "./Settings";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Collect" component={collect} />

					<Stack.Screen name="Details" component={Details} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
