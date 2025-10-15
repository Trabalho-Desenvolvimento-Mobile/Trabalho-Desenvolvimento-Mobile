import { Button } from "@/components/button";
import { DisneyItem, type DisneyProps } from "@/components/DisneyItem";
import { Input } from "@/components/input";
import axios from "axios";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { FavoriteScreen } from "../FavoriteScreen/FavoriteScreen";
import { styles } from "./styles";

type DisneyApiItem = {
	_id: string;
	name: string;
	imageUrl: string;
	films: string[];
	shortFilms: string[];
	tvShows: string[];
};

export default function HomeScreen() {
	const [name, setName] = useState("");
	const [characters, setCharacters] = useState<DisneyProps[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [showFavorites, setShowFavorites] = useState(false);

	if (showFavorites) {
		return <FavoriteScreen goBack={() => setShowFavorites(false)} />;
	}

	async function fetchCharacter() {
		if (!name.trim()) {
			setError("Digite o nome que deseja buscar");
			return;
		}

		setLoading(true);
		setError(null);

		try {
			const response = await axios.get("https://api.disneyapi.dev/character", {
				params: { name },
			});

			const data = response.data.data;
			console.log("DATA RECEBIDA:", data);

			const formatted: DisneyProps[] = data.map((item: DisneyApiItem) => ({
				id: item._id,
				name: item.name,
				imageUrl: item.imageUrl,
				films: item.films,
				shortFilms: item.shortFilms,
				tvShows: item.tvShows,
			}));

			setCharacters(formatted);
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message);
				console.error("Erro:", err.message);
			} else {
				setError("Erro desconhecido");
				console.error("Erro inesperado:", err);
			}
		} finally {
			setLoading(false);
		}
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => setShowFavorites(true)}
				style={{
					marginTop: 20,
					backgroundColor: "transparent",
					paddingVertical: 10,
					paddingHorizontal: 20,
					borderRadius: 8,
				}}
			>
				<Text style={{ color: "#ffd000ff", fontWeight: "bold" }}>
					Ir para Favoritos
				</Text>
			</TouchableOpacity>
			<View style={styles.header}>
				<Text style={styles.title}>Seja bem-vindo ao Disney Explorer!</Text>
				<Text style={styles.subtitle}>Busque pelo seu personagem favorito</Text>
			</View>
			<View style={styles.searchbar}>
				<Input
					placeholder="Nome do personagem"
					value={name}
					onChangeText={setName}
				/>
				<Button onPress={fetchCharacter} />
			</View>

			{error && <Text>{error}</Text>}

			<FlatList
				style={{ width: "100%" }}
				contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 16 }}
				data={characters}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <DisneyItem {...item} />}
				ListEmptyComponent={
					!loading && !error ? (
						<Text style={{ textAlign: "center", marginTop: 20, color: "#666" }}>
							Nenhum personagem encontrado
						</Text>
					) : null
				}
			/>
		</View>
	);
}
