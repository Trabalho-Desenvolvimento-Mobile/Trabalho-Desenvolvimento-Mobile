import { DisneyItem, type DisneyProps } from "@/components/DisneyItem";
import { DisneyStorage } from "@/storage/DisneyStorage";
import { useCallback, useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type FavoriteScreenProps = {
	goBack?: () => void;
};

export function FavoriteScreen({ goBack }: FavoriteScreenProps) {
	const [favorites, setFavorites] = useState<DisneyProps[]>([]);
	const [loading, setLoading] = useState(false);

	const loadFavorites = useCallback(async () => {
		setLoading(true);
		try {
			const data = await DisneyStorage.get();
			setFavorites(data);
		} catch (err) {
			console.error("Erro ao carregar favoritos", err);
			setFavorites([]);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		loadFavorites();
	}, [loadFavorites]);

	const handleItemToggled = (item: DisneyProps) => {
		console.log("Favorito atualizado:", item.name);
		loadFavorites();
	};

	return (
		<View style={styles.container}>
			{goBack ? (
				<TouchableOpacity
					onPress={goBack}
					style={{
						marginTop: 20,
						backgroundColor: "transparent",
						paddingVertical: 10,
						paddingHorizontal: 20,
						borderRadius: 8,
					}}
				>
					<Text style={{ color: "#5543f1ff", fontWeight: "bold" }}>
						Voltar para Home
					</Text>
				</TouchableOpacity>
			) : null}

			<View style={styles.header}>
				<Text style={styles.title}>⭐ Personagens Favoritos</Text>
				<Text style={styles.subtitle}>
					Toque na estrela para remover dos favoritos
				</Text>
			</View>

			<FlatList
				style={{ width: "100%" }}
				contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 16 }}
				data={favorites}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<DisneyItem
						id={item.id}
						name={item.name}
						imageUrl={item.imageUrl}
						films={item.films}
						shortFilms={item.shortFilms}
						tvShows={item.tvShows}
						// @ts-expect-error
						onToggle={handleItemToggled}
					/>
				)}
				ListEmptyComponent={
					!loading ? (
						<Text style={{ textAlign: "center", marginTop: 20, color: "#666" }}>
							Nenhum personagem favoritado ainda.
						</Text>
					) : null
				}
			/>
		</View>
	);
}
