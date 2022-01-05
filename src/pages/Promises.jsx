import { useEffect } from "react";
import promises from "@data/promises";

import CardList from "@components/CardList";
import InfoPage from "@components/InfoPage";
import usePageChange from "@hooks/usePageChange";

export default function Promises() {
	usePageChange(useEffect, "Akto | Our Promise");

	return (
		<InfoPage title="Our Promise" subtitle="We succeed when we make our clients successful">
			<CardList
				list={promises}
				title={"When you sign onto an engagement with our team, we assure you that we will..."}
			/>
		</InfoPage>
	);
}
