import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: 16,
		paddingTop: 50,
		backgroundColor: "#f5f5f5",
	},
	header: {
		alignItems: "center",
		width: "100%",
		margin: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: "600",
	},
	subtitle: {
		fontSize: 15,
		fontWeight: "300",
	},
	searchbar: {
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		gap: 10,
		paddingTop: 10,
	},
});
