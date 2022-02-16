import CardList from "@components/CardList";
import FeatureList from "@components/FeatureList";
import Help from "@components/Help";
import InfoPage from "@components/InfoPage";
import OurTech from "@components/OurTech";
import mobileappfeatures from "@data/mobileappfeatures";
import { processes, subtitle, title } from "@data/process";

const MobileApps = () => (
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

export default MobileApps;
