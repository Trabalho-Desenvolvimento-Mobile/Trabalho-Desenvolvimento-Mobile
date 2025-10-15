import AsyncStorage from "@react-native-async-storage/async-storage";

const DISNEY_STORAGE_KEY = "disney-storage";

export type DisneyStorage = {
	id: string;
	name: string;
	imageUrl: string;
	films: string[] | null;
	shortFilms: string[] | null;
	tvShows: string[] | null;
};

async function get(): Promise<DisneyStorage[]> {
	const storage = await AsyncStorage.getItem(DISNEY_STORAGE_KEY);
	const response = storage ? JSON.parse(storage) : [];
	return response;
}

async function save(newFav: DisneyStorage) {
	try {
		const storage = await get();
		const updated = JSON.stringify([...storage, newFav]);
		await AsyncStorage.setItem(DISNEY_STORAGE_KEY, updated);
	} catch (error) {
		throw error;
	}
}

async function remove(id: string) {
	try {
		const storage = await get();
		const updated = storage.filter((fav) => fav.id !== id);
		await AsyncStorage.setItem(DISNEY_STORAGE_KEY, JSON.stringify(updated));
	} catch (error) {
		throw error;
	}
}

export const DisneyStorage = { get, save, remove };
