import { Button } from "@/components/button/button";
import { Input } from "@/components/input/input";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text>Seja bem-vindo ao Disney Explorer!</Text>
				<Text>Pesquise seu personagem favorito!</Text>
			</View>
			<View style={styles.searchbar}>
				<Input />
				<Button />
			</View>
		</View>
	);
}
