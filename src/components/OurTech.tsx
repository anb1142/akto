import { mobile, tech } from "@data/tech";
import { TechSpace } from "@stores/TechSpace";
import "@styles/components/OurTech.scss";

type Props = { mobileApp?: boolean };
const OurTech = (props: Props) => {
	let list: TechSpace.List[];
	props.mobileApp ? (list = [mobile, ...tech]) : (list = tech);
	const Tech = () => (
		<section>
			{list.map(({ url, img, name }, i) => (
				<a key={i} href={url} target="_blank">
					<img src={img} alt={name} />
				</a>
			))}
		</section>
	);
	return (
		<div className="tech">
			<header>
				<h2>Our Technologies</h2>
				<p>We have the technology expertise and experience to drive results for your business</p>
			</header>
			<Tech />
		</div>
	);
};

export default OurTech;
