import { useEffect } from "react";
import "@styles/pages/Solutions.scss";

import InfoPage from "@components/InfoPage";
import Help from "@components/Help";
import Solution from "@components/Solution";
import usePageChange from "@hooks/usePageChange";

export default function Solutions() {
	usePageChange(useEffect, "Akto | Solutions");

	return (
		<InfoPage
			className="solutions"
			title="Our Solutions"
			subtitle="Innovation, design, and technology that transforms"
		>
			<Solution />
			<Help />
		</InfoPage>
	);
}
