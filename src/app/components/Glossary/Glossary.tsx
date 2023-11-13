import styles from "./Glossary.module.css";
import classNames from "classnames";

const Glossary = () => {
	return (
		<div className="flex justify-center">
			<div className={classNames(styles.titleWrapper, "flex", "justify-center")}>
				<h1>Pokemen Glossary</h1>
			</div>
			<ul>
				<span>POKEMON NAMES</span>
			</ul>
		</div>
	);
};

export default Glossary;
