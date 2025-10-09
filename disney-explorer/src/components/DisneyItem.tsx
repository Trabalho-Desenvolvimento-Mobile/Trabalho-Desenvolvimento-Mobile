// id, name, imageurl
import { Image, StyleSheet, Text, View } from 'react-native'

export type DisneyProps = {
	id: number
	name: string
	imageUrl: string
	films: string[] | null
	shortFilms: string[] | null
	tvShows: string[] | null
}

export function DisneyItem({
	name,
	imageUrl,
	films,
	shortFilms,
	tvShows,
}: DisneyProps) {
	return (
		<View style={styles.char}>
			<View style={styles.imageContainer}>
				<Image source={{ uri: imageUrl }} style={styles.image} />
			</View>

			<View style={styles.infoContainer}>
				<Text style={styles.name}>{name}</Text>

				<View style={styles.appearances}>
					<Text style={styles.txt}>
						🎬 {films && films.length > 0 ? films.join(', ') : 'Sem filmes'}
					</Text>
					<Text style={styles.txt}>
						🎞️{' '}
						{shortFilms && shortFilms.length > 0
							? shortFilms.join(', ')
							: 'Sem curtas'}
					</Text>
					<Text style={styles.txt}>
						📺{' '}
						{tvShows && tvShows.length > 0 ? tvShows.join(', ') : 'Sem séries'}
					</Text>
				</View>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	char: {},
	imageContainer: {},
	image: {},
	infoContainer: {},
	name: {},
	txt: {},
	appearances: {},
})
