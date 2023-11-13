export type Result = {
	name: string;
	url: string;
};

export type CardResults = {
	results: Result[];
};

export type CardProps = {
	data: CardResults;
};
