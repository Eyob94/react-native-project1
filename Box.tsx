import { View } from "react-native";
import React from "react";
import styled from "styled-components/native";

export type Props = {
	children: React.ReactNode;
};

const Box: React.FC<Props> = ({ children }) => {
	return <StyledBox>{children}</StyledBox>;
};

export default Box;

const StyledBox = styled.View`
	display: flex;
	flex-direction: row;
	color: black;
	justify-content: center;
	align-items: center;
	background-color: lightgray;
	border-width: 1px;
	border-color: #aaa;
	border-radius: 15px;
	padding: 5px;
	height: 100px;
	width: 100px;
`;
