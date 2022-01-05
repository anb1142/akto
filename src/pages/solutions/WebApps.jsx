import { useEffect } from "react";

import { processes, title, subtitle } from "@data/process";
import webappfeatures from "@data/webappfeatures";

import InfoPage from "@components/InfoPage";
import FeatureList from "@components/FeatureList";
import Help from "@components/Help";
import CardList from "@components/CardList";
import OurTech from "@components/OurTech";
import usePageChange from "@hooks/usePageChange";

export default function WebApps() {
	usePageChange(useEffect, "Akto | Web App Design & Development");

	return (
		<InfoPage className="webapps" title="Web App Design & Development">
			<FeatureList
				list={webappfeatures}
				subtitle="Increasing customer proximity and business effeciency with a custom-made web solution"
			/>
			<CardList list={processes} title={title} subtitle={subtitle} />
			<OurTech />
			<Help />
		</InfoPage>
	);
}
