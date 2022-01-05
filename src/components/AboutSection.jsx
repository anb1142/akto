import React from "react";

export default function AboutSection({ title, p1, p2, img }) {
	return (
		<article>
			<div>
				<h2>{title}</h2>
				<p>{p1}</p>
				<p>{p2}</p>
			</div>
			<img src={img} alt="cover photo" />
		</article>
	);
}
