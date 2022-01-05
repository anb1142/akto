import "@styles/components/InfoPage.scss";

export default function InfoPage({ className, title, subtitle, children }) {
	return (
		<section className="infopage">
			<div>
				<h1>{title}</h1>
				{subtitle && <p>{subtitle}</p>}
			</div>
			{className ? <section className={className}>{children}</section> : children}
		</section>
	);
}
