import CardList from "@components/CardList";
import FeatureList from "@components/FeatureList";
import Help from "@components/Help";
import InfoPage from "@components/InfoPage";
import OurTech from "@components/OurTech";
import { processes, subtitle, title } from "@data/process";
import webappfeatures from "@data/webappfeatures";

const WebApps = () => (
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

export default WebApps;
