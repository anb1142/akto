import AboutSection from "@components/AboutSection";
import InfoPage from "@components/InfoPage";
import "@styles/pages/About.scss";
import a from "/img/about/1.png";
import b from "/img/about/2.png";

const About = () => (
	<InfoPage
		className="about"
		title="About"
		subtitle="Supporting our clients in their digital ambitions"
	>
		<AboutSection
			title="Our Story"
			p1="We started as a start-up, working on delivering website solutions for businesses in Sri
				Lanka. During that experience we observed businesses can do a lot better in the digital
				world by embracing digital transformation into their organization and we decided to help
				businesses to transform and grow."
			p2="Today we deliver digital transformation solutions for businesses and enterprises. We are
				privileged to connect with more than 50 customers of various industries from different
				parts of the world. Our Vision"
			img={a}
		/>
		<section>
			<div>
				<h3>Our Vision</h3>
				<p>Accelerate digital transformation in businesses.</p>
			</div>
			<div>
				<h3>Our Mision</h3>
				<p>
					Creating great experiences for our clients and their customers through the power of people and
					technology.
				</p>
			</div>
		</section>

		<AboutSection
			title="What We Do"
			p1=">We transform businesses for the digital era."
			p2="Today we deliver digital transformation solutions for businesses and enterprises. We are
			privileged to connect with more than 50 customers of various industries from different
			parts of the world."
			img={b}
		/>
	</InfoPage>
);

export default About;
