import { Image, StyleSheet, Text, View } from "react-native";

export type DisneyProps = {
	id: string;
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
		<View style={styles.card}>
			<Image
				source={{
					uri:
						imageUrl ||
						"https://via.placeholder.com/100x100.png?text=Sem+Imagem",
				}}
				style={styles.image}
				resizeMode="cover"
			/>

			<View style={styles.infoContainer}>
				<Text style={styles.name}>{name}</Text>

				<Text style={styles.sectionTitle}>🎬 Filmes:</Text>
				<Text style={styles.txt}>
					{films && films.length > 0 ? films.join(", ") : "Sem filmes"}
				</Text>

				<Text style={styles.sectionTitle}>🎞️ Curtas:</Text>
				<Text style={styles.txt}>
					{shortFilms && shortFilms.length > 0
						? shortFilms.join(", ")
						: "Sem curtas"}
				</Text>

				<Text style={styles.sectionTitle}>📺 Séries:</Text>
				<Text style={styles.txt}>
					{tvShows && tvShows.length > 0 ? tvShows.join(", ") : "Sem séries"}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		flexDirection: "row",
		backgroundColor: "#fff",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#eee",
		padding: 10,
		marginVertical: 8,
		width: "100%",
		elevation: 3,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		alignItems: "flex-start",
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 10,
		margin: 5,
	},
	infoContainer: {
		flex: 1,
		flexShrink: 1,
		justifyContent: "center",
		alignItems: "flex-start",
		paddingVertical: 5,
	},
	name: {
		fontSize: 18,
		fontWeight: "700",
		marginBottom: 4,
	},
	sectionTitle: {
		fontWeight: "600",
		fontSize: 12,
		marginTop: 6,
	},
	txt: {
		fontSize: 11,
		color: "#444",
	},
});
