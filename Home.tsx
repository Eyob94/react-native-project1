import React, { useState, useEffect } from "react";
import {
	Button,
	Text,
	StatusBar,
	StyleSheet,
	FlatList,
	ActivityIndicator,
} from "react-native";
import MapView from "react-native-maps";

import Box from "./Box";
import Screen from "./Screen";
import * as Location from "expo-location";

export type Props = {
	navigation: any;
};

const Home: React.FC<Props> = ({ navigation }) => {
	const [address, setAddress] = useState("");
	const [longitude, setLongitude] = useState(0);
	const [latitude, setLatitude] = useState(0);

	const fn = async () => {
		let { status } = await Location.requestForegroundPermissionsAsync();

		console.log(status);

		if (status !== "granted") {
			console.log("not granted");
			return;
		}

		let {
			coords: { longitude, latitude },
		} = await Location.getCurrentPositionAsync({});

		setLongitude(longitude);
		setLatitude(latitude);

		let watcher = await Location.watchPositionAsync(
			{
				accuracy: Location.LocationAccuracy.Highest,
			},
			() => console.log("hello")
		);
		console.log(watcher);
	};

	useEffect(() => {
		fn();
	}, []);

	return (
		<Screen>
			<MapView showsUserLocation followsUserLocation />
		</Screen>
	);
};

const styles = StyleSheet.create({
	text: {
		width: "100%",
		backgroundColor: "lightblue",
		fontSize: 20,
		color: "black",
		display: "flex",
		justifyContent: "center",
		marginBottom: 5,
	},
});

export default Home;
