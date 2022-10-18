import React, { useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";

const Input = (props) => {
	return (
		<View>
			<TextInput {...props} />
		</View>
	);
};

export default function collect() {
	const [changedText, setChangedText] = useState("");
	const [submittedText, setSubmittedText] = useState("");

	console.log(changedText);

	return (
		<View>
			<Input
				label="username"
				onChangeText={setChangedText}
				value={changedText}
				secureTextEntry
				returnKeyType="search"
				placeholder="search"
				onSubmitEditing={() => console.log("submitted")}
			/>
		</View>
	);
}
