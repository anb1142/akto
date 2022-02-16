import CareerApply from "@components/CareerApply";
import CareerList from "@components/CareerList";
import FeatureList from "@components/FeatureList";
import InfoPage from "@components/InfoPage";
import careerfeatures from "@data/careerfeatures";
import "@styles/pages/Careers.scss";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

const Careers = () => {
	const [applying, setApplying] = useState("");

	return (
		<InfoPage
			title="Our Careers"
			className="careers"
			subtitle="We’re looking for people who believe that we can accomplish so much more together than apart"
		>
			<FeatureList
				title="Believe you should love where you work? So do we."
				subtitle="Our benifits will help you thrive at akto"
				list={careerfeatures}
			/>
			<section>
				<header>
					<h2>Sound like a team you want to work and grow with?</h2>
					<p>Check out our current job openings</p>
				</header>
				<CareerList setApplying={setApplying} />
				<CareerApply applying={applying} setApplying={setApplying} />
			</section>
		</InfoPage>
	);
};

export default Careers;
