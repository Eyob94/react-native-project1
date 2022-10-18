import React from "react";
import { View, Button } from "react-native";
import Box from "./Box";
import { Props } from "./Home";
import Screen from "./Screen";

const Settings: React.FC<Props> = ({ navigation }) => {
	return (
		<Screen>
			<Box>Settings</Box>

			<Button title="home" onPress={() => navigation.navigate("Home")} />
		</Screen>
	);
};

export default Settings;
