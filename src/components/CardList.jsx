import "@styles/components/CardList.scss";
export default function CardList({ title, subtitle, list }) {
	const Cards = () => (
		<section>
			{list.map(({ img, p, h3 }, i) => (
				<article key={i}>
					<img src={img} alt="cover photo" />
					<div>
						<p>{p}</p>
						{h3 && <h3>{h3}</h3>}
					</div>
				</article>
			))}
		</section>
	);

	return (
		<section className="cardlist">
			<header>
				{title && <h2>{title}</h2>}
				{subtitle && <p>{subtitle}</p>}
			</header>
			<Cards />
		</section>
	);
}
