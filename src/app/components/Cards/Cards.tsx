import getAllPokemon from "@data/getAllPokemon";
import { CardProps, Result } from "@dataTypes/Card.type";
import Link from "next/link";
import { notFound } from "next/navigation";

const InnerCard = ({ name, url }: Result) => {
	return (
		<div className="grid grid-col-1 text-lg text-black text-center p-8">
			<p className="font-black uppercase">{name}</p>
			<Link href={url} className="text-sm">
				<span className="text-blue-500">Catch It!</span>
			</Link>
		</div>
	);
};

const Cards = async () => {
	const allPokemon = await getAllPokemon();
	if (!allPokemon) return notFound();

	const { results } = allPokemon;

	return (
		<>
			<ul className="flex flex-row p-6 flex-wrap">
				{results &&
					results.map(({ name, url }) => (
						<li key={name}>
							<div className="wrapper w-48 h-80 rounded-md bg-slate-50 m-4 border-8 border-yellow-500">
								<div className="container w-full h-full">
									<InnerCard name={name} url={url} />
								</div>
							</div>
						</li>
					))}
			</ul>
		</>
	);
};

export default Cards;
