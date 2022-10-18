import React from "react";
import { View, Button, Text } from "react-native";
import Box from "./Box";
import { Props } from "./Home";
import Screen from "./Screen";

export type DetailProps = {
	route: any;
	navigation: any;
};

const Details: React.FC<DetailProps> = ({ route, navigation }) => {
	const { title } = route.params;

	React.useLayoutEffect(() => {
		navigation.setOptions({ title });
	}, []);

	console.log(route);
	return (
		<Screen>
			<Box>
				<Text>Detaidsls</Text>
			</Box>
			<Text>Hi {title}</Text>

			<Button title="home" onPress={() => navigation.navigate("Home")} />
		</Screen>
	);
};

export default Details;
