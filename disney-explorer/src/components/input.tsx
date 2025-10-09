import { StyleSheet, TextInput, type TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
	return <TextInput style={styles.container} {...rest} />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: 200,
		height: 40,
		borderRadius: 30,
		backgroundColor: "#FFF",
		paddingLeft: 15,
		letterSpacing: 0.8,
		color: "#222",
		fontSize: 13,
		boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.075)",
	},
});
