import {
	StyleSheet,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";

export function Button({ ...rest }: TouchableOpacityProps) {
	return (
		<TouchableOpacity style={styles.container} {...rest}>
			Buscar
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {},
});
