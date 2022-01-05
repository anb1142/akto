import { useEffect } from "react";

import { processes, title, subtitle } from "@data/process";
import mobileappfeatures from "@data/mobileappfeatures";

import InfoPage from "@components/InfoPage";
import FeatureList from "@components/FeatureList";
import Help from "@components/Help";
import CardList from "@components/CardList";
import OurTech from "@components/OurTech";
import usePageChange from "@hooks/usePageChange";

export default function MobileApps() {
	usePageChange(useEffect, "Akto | Mobile App Design & Development");

	return (
		<InfoPage className="mobileapps" title="Mobile App Design & Development">
			<FeatureList
				list={mobileappfeatures}
				subtitle="Transform your business idea with future-ready technologies as a revolutionary mobile application and keep in sync with the demand"
			/>
			<CardList list={processes} title={title} subtitle={subtitle} />
			<OurTech mobileApp={true} />
			<Help />
		</InfoPage>
	);
}
