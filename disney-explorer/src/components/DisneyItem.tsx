import { DisneyStorage } from "@/storage/DisneyStorage";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
	Alert,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

export type DisneyProps = {
	id: string;
	name: string;
	imageUrl: string;
	films: string[] | null;
	shortFilms: string[] | null;
	tvShows: string[] | null;
};

export function DisneyItem({
	id,
	name,
	imageUrl,
	films,
	shortFilms,
	tvShows,
}: DisneyProps) {
	const [favorited, setFavorited] = useState(false);

	useEffect(() => {
		const checkFavorite = async () => {
			const data = await DisneyStorage.get();
			const exists = data.some((fav) => fav.id === id);
			setFavorited(exists);
		};
		checkFavorite();
	}, [id]);

	async function handleFavorite() {
		try {
			const data = await DisneyStorage.get();
			const exists = data.some((fav) => fav.id === id);

			if (exists) {
				await DisneyStorage.remove(id);
				setFavorited(false);
				Alert.alert("Removido!", `${name} foi removido dos favoritos.`);
			} else {
				await DisneyStorage.save({
					id,
					name,
					imageUrl,
					films,
					shortFilms,
					tvShows,
				});
				setFavorited(true);
				Alert.alert("Salvo!", `${name} foi adicionado aos favoritos.`);
			}
		} catch (error) {
			console.error("Erro ao alterar favorito:", error);
			Alert.alert("Erro", "Não foi possível atualizar os favoritos.");
		}
	}

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
				<TouchableOpacity onPress={handleFavorite}>
					<MaterialIcons
						name={favorited ? "star" : "star-border"}
						size={24}
						color={favorited ? "#FFD700" : "#888"}
					/>
				</TouchableOpacity>
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
