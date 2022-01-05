import { useEffect, useState } from "react";
import slides from "@data/slides";
import "@styles/components/Slides.scss";

export default function Slides() {
	const [currentSlide, setSlide] = useState(0);

	useEffect(() => {
		const sliding = setInterval(
			() => (slides.length - 1 === currentSlide ? setSlide(0) : setSlide(currentSlide + 1)),
			3000
		);
		return () => clearInterval(sliding);
	});

	return (
		<section className="slides">
			{slides.map(({ img, h2, p }, i) => (
				<article
					key={i}
					style={{
						transform: `translateX(-${currentSlide * 100}%)`,
					}}
				>
					<img src={img} alt="slide" />
					<div>
						<h2>{h2}</h2>
						<p>{p}</p>
					</div>
				</article>
			))}
		</section>
	);
}
