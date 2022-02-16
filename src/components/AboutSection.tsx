type Props = { title: string; p1: string; p2: string; img: string };

const AboutSection = (props: Props) => (
	<article>
		<div>
			<h2>{props.title}</h2>
			<p>{props.p1}</p>
			<p>{props.p2}</p>
		</div>
		<img src={props.img} alt="cover photo" />
	</article>
);

export default AboutSection;
