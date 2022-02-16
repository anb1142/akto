import CardList from "@components/CardList";
import InfoPage from "@components/InfoPage";
import promises from "@data/promises";

const Promises = () => (
	<InfoPage title="Our Promise" subtitle="We succeed when we make our clients successful">
		<CardList
			list={promises}
			title={"When you sign onto an engagement with our team, we assure you that we will..."}
		/>
	</InfoPage>
);

export default Promises;
