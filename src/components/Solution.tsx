import solutions from "@data/solutions";
import "@styles/components/Solution.scss";
import { Link } from "react-router-dom";

const Solution = () => (
	<div className="solution">
		{solutions.map(({ link, icon, title, p }, i) => (
			<Link key={i} to={link}>
				<h3>
					{icon}
					{title}
				</h3>
				<p>{p}</p>
			</Link>
		))}
	</div>
);

export default Solution;
