import { StyleSheet, TextInput, type TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
	return <TextInput style={styles.container} {...rest} />;
}

const styles = StyleSheet.create({
	container: {},
});
