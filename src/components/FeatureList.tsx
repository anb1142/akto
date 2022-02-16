import { FeatureSpace } from "@stores/FeatureSpace";
import "@styles/components/FeatureList.scss";

type Props = { list: FeatureSpace.List[]; title?: string; subtitle?: string };

const FeatureList = (props: Props) => {
	const Cards = () => (
		<section>
			{props.list.map(({ icon, text }, i) => (
				<p key={i}>
					<span>{icon}</span>
					{text}
				</p>
			))}
		</section>
	);

	return (
		<article className="featurelist">
			<header>
				{props.title && <h2>{props.title}</h2>}
				{props.subtitle && <p>{props.subtitle}</p>}
			</header>
			<Cards />
		</article>
	);
};

export default FeatureList;
