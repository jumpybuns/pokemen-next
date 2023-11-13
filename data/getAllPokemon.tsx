import { CardProps, CardResults } from "@dataTypes/Card.type";

const getAllPokemon = async (): Promise<CardProps> => {
	const url = "https://pokeapi.co/api/v2/pokemon";
	const res = await fetch(url, { cache: "no-store" });

	if (!res.ok) {
		throw new Error("Failed to fetch");
	}
	const data: CardProps = await res.json();

	return data;
};

export default getAllPokemon;
