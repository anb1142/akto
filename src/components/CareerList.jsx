import "@styles/components/CareerList.scss";
import DropdownDetails from "./DropdownDetails";
import { Link } from "react-router-dom";
import careers from "@data/careers";
export default function CareerList() {
	return (
		<section className="careerlist">
			{careers.map(({ pos, content }, i) => (
				<DropdownDetails key={i} title={pos} content={content}>
					{content && <Link to={pos.replace(/\s/g, "")}>Apply Now</Link>}
				</DropdownDetails>
			))}
		</section>
	);
}
