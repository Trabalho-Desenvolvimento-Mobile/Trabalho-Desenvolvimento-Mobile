import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Text, View, FlatList } from "react-native";
import { styles } from "./styles";
import axios from "axios";
import { useState } from "react";
import { DisneyItem, DisneyProps } from "@/components/DisneyItem";


export default function HomeScreen() {
	const [name, setName] = useState("")
	const [characters, setCharacters] = useState<DisneyProps[]>([])
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState(false)

	async function fetchCharacter(){
		if(!name.trim()){
			setError("Digite o nome que deseja buscar")
			return
		}
		
		setLoading(true)
		setError(null)

		try {
			const response = await axios.get("https://api.disneyapi.dev/character", {
				params: { name },
			})

			const data = response.data.data

			const formatted = data.map((item: any) => ({
				id: item._id,
				name: item.name,
				imageUrl: item.imageUrl,
				films: item.films,
				shortFilms: item.shortFilms,
				tvShows: item.tvShows,
			}))

			setCharacters(formatted)
		} catch (err) {
			setError("Erro ao buscar personagem :(")
		} finally {
			setLoading(false)
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Seja bem-vindo ao Disney Explorer!</Text>
				<Text style={styles.subtitle}>
					Busque pelo seu personagem favorito
				</Text>
			</View>
			<View style={styles.searchbar}>
				<Input placeholder="Nome do personagem" />
				<Button onPress={fetchCharacter}/>
			</View>

			{error && <Text>{error}</Text>}

			<FlatList 
			data={characters}
			keyExtractor={(item) => item.id.toString()}
			renderItem={({item}) => <DisneyItem {...item}/>}
			/>
		</View>
	);
}
