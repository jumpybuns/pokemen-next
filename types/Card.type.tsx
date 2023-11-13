export type CardResults = {
	results: {
		name: string;
		url: string;
	}[];
};

export type CardProps = {
	data: CardResults;
};
