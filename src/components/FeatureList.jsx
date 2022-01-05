import "@styles/components/FeatureList.scss";
export default function FeatureList({ list, title, subtitle }) {
	const Cards = () => (
		<section>
			{list.map(({ icon, text }, i) => (
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
				{title && <h2>{title}</h2>}
				{subtitle && <p>{subtitle}</p>}
			</header>
			<Cards />
		</article>
	);
}
