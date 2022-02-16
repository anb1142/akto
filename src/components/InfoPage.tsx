import "@styles/components/InfoPage.scss";
import { useEffect } from "react";

type Props = { className?: string; title: string; subtitle?: string; children: any };

const InfoPage = (props: Props) => {
	useEffect(() => {
		document.title = "Akto | " + props.title;
		window.scrollTo(0, 0);
	}, []);

	return (
		<section className="infopage">
			<div>
				<h1>{props.title}</h1>
				{props.subtitle && <p>{props.subtitle}</p>}
			</div>
			{props.className ? (
				<section className={props.className}>{props.children}</section>
			) : (
				props.children
			)}
		</section>
	);
};

export default InfoPage;
