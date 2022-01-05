import { useEffect } from "react";

import brain from "/img/brain.png";
import art from "/img/what_we_do.png";
import { brainLeft, brainRight } from "@data/brain";
import team from "@data/team";

import "@styles/pages/Home.scss";
import "@styles/components/Footer.scss";

import Slides from "@components/Slides";
import Solution from "@components/Solution";
import usePageChange from "@hooks/usePageChange";

export default function Home() {
	usePageChange(useEffect, "Akto Solutions");

	const BrainListItem = ({ icon, p }) => (
		<div>
			<p>{icon}</p>
			{p}
		</div>
	);

	const BrainList = ({ list }) => (
		<article>
			{list.map(({ icon, p }, i) => (
				<BrainListItem icon={icon} p={p} key={i} />
			))}
		</article>
	);
	const Point = ({ title, desc }) => (
		<>
			<h3>{title}</h3>
			<p>{desc}</p>
		</>
	);
	const Team = () =>
		team.map(({ name, position, img }, i) => (
			<article key={i}>
				<img src={img} alt={`image of ${name}`} />
				<h4>{name}</h4>
				<p>{position}</p>
			</article>
		));
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
				<div>
					<Team />
				</div>
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
}
