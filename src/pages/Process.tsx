import CardList from "@components/CardList";
import InfoPage from "@components/InfoPage";
import { processes, subtitle, title } from "@data/process";

const Process = () => (
	<InfoPage title={title} subtitle={subtitle}>
		<CardList list={processes} title={title} subtitle={subtitle} />
	</InfoPage>
);

export default Process;
