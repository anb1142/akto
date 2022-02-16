import Slides from "@components/Slides";
import Solution from "@components/Solution";
import { brainLeft, brainRight } from "@data/brain";
import team from "@data/team";
import "@styles/components/Footer.scss";
import "@styles/pages/Home.scss";
import { useEffect } from "react";
import { HomeSpace } from "@stores/HomeSpace";
import brain from "/img/brain.png";
import art from "/img/what_we_do.png";

const Home = () => {
	useEffect(() => {
		document.title = "Akto";
	}, []);

	const BrainList = (props: { list: HomeSpace.BrainList[] }) => (
		<article>
			{props.list.map(({ icon, p }, i) => (
				<div>
					<p>{icon}</p>
					{p}
				</div>
			))}
		</article>
	);
	const Point = (props: { title: string; desc: string }) => (
		<>
			<h3>{props.title}</h3>
			<p>{props.desc}</p>
		</>
	);
	const Team = () => (
		<div>
			{team.map(({ name, position, img }, i) => (
				<article key={i}>
					<img src={img} alt={`Portrait of ${name}`} />
					<h4>{name}</h4>
					<p>{position}</p>
				</article>
			))}
		</div>
	);
	return (
		<section className="home">
			<Slides />
			<header>
				<h2>What keeps you up at night?</h2>
				<p>Our solutions can help accelerate your business transformation and innovation.</p>
			</header>
			<article>
				<div>
					<Point
						title="We transform businesses for the digital era."
						desc="We work collaboratively with our customers to create a deep understanding of the
						business process, opportunities and risks presented by new emerging technologies and
						think creatively about how to use these technologies to improve business performance."
					/>
					<Point
						title="We steer your business through change."
						desc="Collaboration is at the heart of our culture and the way we work with you. Our approach
					is shaped around your business and IT priorities, and based on the latest thinking about
					digital and cloud solutions, business applications and technology services"
					/>
				</div>
				<img src={art} alt="cover photo" />
			</article>
			<section>
				<header>
					<h2>Our Solutions</h2>
					<p>Innovation, design, and technology that transforms</p>
				</header>
				<Solution />
			</section>
			<section className="brain">
				<header>
					<h2>Don't change your business processes</h2>
					<p>Transform them</p>
				</header>
				<div>
					<BrainList list={brainLeft} />
					<img src={brain} alt="image of a circuit, shaped like a brain" />
					<BrainList list={brainRight} />
				</div>
			</section>
			<section className="team">
				<header>
					<h2>Meet Akto's team</h2>
					<p>Spotlight on the people leading the way for Akto and our clients. </p>
				</header>
				<Team />
			</section>
			<footer>
				<p>
					All Rights Reserved | Made by{" "}
					<a target="_blank" href="https://www.linkedin.com/in/anb1142/">
						Anuja Nimesh
					</a>
				</p>
			</footer>
		</section>
	);
};

export default Home;
