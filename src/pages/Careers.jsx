import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "@styles/pages/Careers.scss";

import InfoPage from "@components/InfoPage";
import FeatureList from "@components/FeatureList";
import CareerList from "@components/CareerList";
import Modal from "@components/Modal";
import careerfeatures from "@data/careerfeatures";
import usePageChange from "@hooks/usePageChange";

export default function Careers() {
	usePageChange(useEffect, "Akto | Careers");

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
				<CareerList />

				<Routes>
					<Route path=":id" element={<Modal />} />
				</Routes>
			</section>
		</InfoPage>
	);
}
