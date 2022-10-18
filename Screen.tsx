import React from "react";
import { View, StatusBar } from "react-native";
import styled from "styled-components/native";

export type Props = {
	children: React.ReactNode;
};

const Screen: React.FC<Props> = ({ children }) => {
	return (
		<ScreenView>
			<StatusBar barStyle="dark-content" />
			{children}
		</ScreenView>
	);
};

const ScreenView = styled.View`
	display: flex;
	gap: 10px;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
`;

export default Screen;
