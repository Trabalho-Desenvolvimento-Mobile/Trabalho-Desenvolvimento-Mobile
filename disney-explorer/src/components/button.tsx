import {
	StyleSheet,
	Text,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";

export function Button({ ...rest }: TouchableOpacityProps) {
	return (
		<TouchableOpacity style={styles.container} {...rest}>
			<Text>Buscar</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 100,
		height: 40,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#5543f1ff",
		color: "#000018ff",
		borderRadius: 30,
		boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.116)",
		cursor: "pointer",
	},
});
