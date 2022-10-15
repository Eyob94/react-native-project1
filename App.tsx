import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import styled from "styled-components/native";
import Box from "./Box";

const boxes: number[] = new Array(10).fill("s").map((v, i) => i + 1);

export default function App() {
	return (
		<Container>
			{boxes.map((i) => {
				return (
					<Box key={i}>
						<BoxText>#{i}</BoxText>
					</Box>
				);
			})}
			<StatusBar style="auto" />
		</Container>
	);
}

const Container = styled.View`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	flex-direction: row;
	flex-wrap: wrap;
`;

const BoxText = styled.Text`
	font-size: 12px;
	color: #222;
`;
