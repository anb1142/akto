import { useEffect } from "react";
import "@styles/pages/BusinessAutomation.scss";

import InfoPage from "@components/InfoPage";
import Help from "@components/Help";
import usePageChange from "@hooks/usePageChange";

export default function BusinessAutomation() {
	usePageChange(useEffect, "Akto | Business Automation");

	return (
		<InfoPage className="ba" title="Business Automation">
			<p>
				Easy and smooth workflow solutions for your organisation and employees. Let the technology
				do the communication between applications and platforms, allow your people to focus on real
				business problems and opportunities.
			</p>
			<Help />
		</InfoPage>
	);
}
