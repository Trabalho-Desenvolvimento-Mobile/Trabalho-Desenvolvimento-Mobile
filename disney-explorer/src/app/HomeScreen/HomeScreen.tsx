import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Seja bem-vindo ao Disney Explorer!</Text>
				<Text style={styles.subtitle}>
					Busque pelo seu personagem favorito:
				</Text>
			</View>
			<View style={styles.searchbar}>
				<Input placeholder="Nome do personagem" />
				<Button />
			</View>
		</View>
	);
}
