import careers from "@data/careers";
import "@styles/components/CareerList.scss";
import { Dispatch, SetStateAction } from "react";
import DropdownDetails from "./DropdownDetails";

const CareerList = (props: { setApplying: Dispatch<SetStateAction<string>> }) => (
	<section className="careerlist">
		{careers.map(({ pos, content }, i) => (
			<DropdownDetails key={i} title={pos} content={content}>
				{content && <button onClick={(e) => props.setApplying(pos)}>Apply Now</button>}
			</DropdownDetails>
		))}
	</section>
);

export default CareerList;
