import { Link } from "react-router-dom";
import "@styles/components/Help.scss";

export default function Help() {
	const strings = [
		"How can we help?",
		"Let us help you!",
		"We are here to help you!",
		"Want to work with us ?",
	];
	return (
		<aside>
			<p>{strings[Math.floor(Math.random() * 4)]}</p>
			<div>
				<Link to="/letstalk">Let's Talk</Link>
				<Link to="/get_a_quote">Get a Quote</Link>
			</div>
		</aside>
	);
}
