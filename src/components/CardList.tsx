import "@styles/components/CardList.scss";

interface List {
	img: string;
	p: string;
	h3?: string;
}

type Props = { title?: string; subtitle?: string; list: List[] };

const CardList = (props: Props) => {
	const Cards = () => (
		<section>
			{props.list.map(({ img, p, h3 }, i) => (
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
				{props.title && <h2>{props.title}</h2>}
				{props.subtitle && <p>{props.subtitle}</p>}
			</header>
			<Cards />
		</section>
	);
};

export default CardList;
