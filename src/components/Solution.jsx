import { Link } from "react-router-dom";
import "@styles/components/Solution.scss";
import solutions from "@data/solutions";

export default function Solution() {
	return (
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
}
