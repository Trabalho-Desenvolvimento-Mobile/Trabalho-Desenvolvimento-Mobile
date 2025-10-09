// DisneyItem.tsx
import { Image, StyleSheet, Text, View } from "react-native";

export type DisneyProps = {
	id: number;
	name: string;
	imageUrl: string;
	films: string[] | null;
	shortFilms: string[] | null;
	tvShows: string[] | null;
};

export function DisneyItem({
	name,
	imageUrl,
	films,
	shortFilms,
	tvShows,
}: DisneyProps) {
	return (
		<View style={styles.char}>
			<Image source={{ uri: imageUrl }} style={styles.image} />

			<View style={styles.infoContainer}>
				<Text style={styles.name}>{name}</Text>

				<View style={styles.appearances}>
					<Text style={styles.txt1}>Filmografia</Text>
					<Text style={styles.txt}>
						🎬 {films && films.length > 0 ? films.join(", ") : "Sem filmes"}
					</Text>
					<Text style={styles.txt}>
						🎞️{" "}
						{shortFilms && shortFilms.length > 0
							? shortFilms.join(", ")
							: "Sem curtas"}
					</Text>
					<Text style={styles.txt}>
						📺{" "}
						{tvShows && tvShows.length > 0 ? tvShows.join(", ") : "Sem séries"}
					</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	char: {
		flexDirection: "row",
		backgroundColor: "#fff",
		padding: 10,
		borderRadius: 10,
		borderColor: "#eee",
		borderWidth: 1,

		shadowColor: "#000",
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.15,
		shadowRadius: 6,

		elevation: 3,

		gap: 10,
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 10,
	},
	infoContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 5,
	},
	name: {
		fontSize: 25,
		fontWeight: "600",
		textAlign: "center",
		marginBottom: 8,
	},
	appearances: {
		alignSelf: "stretch",
		marginTop: 0,
		paddingHorizontal: 5,
	},
	txt1: {
		fontWeight: "500",
		fontSize: 12,
		marginBottom: 4,
	},
	txt: {
		fontSize: 10,
		marginBottom: 2,
		lineHeight: 14,
	},
});
