import { useEffect } from "react";
import { processes, title, subtitle } from "@data/process";

import CardList from "@components/CardList";
import InfoPage from "@components/InfoPage";
import usePageChange from "@hooks/usePageChange";

export default function Process() {
	usePageChange(useEffect, "Akto | Process");

	return (
		<InfoPage title={title} subtitle={subtitle}>
			<CardList list={processes} title={title} subtitle={subtitle} />
		</InfoPage>
	);
}
