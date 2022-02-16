import Help from "@components/Help";
import InfoPage from "@components/InfoPage";
import Solution from "@components/Solution";
import "@styles/pages/Solutions.scss";

const Solutions = () => (
	<InfoPage
		className="solutions"
		title="Our Solutions"
		subtitle="Innovation, design, and technology that transforms"
	>
		<Solution />
		<Help />
	</InfoPage>
);

export default Solutions;
