import "@styles/components/ModalView.scss";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useEffect } from "react";

export default function ModalView({ children, className, closeModal, open }) {
	useEffect(() => {
		disableBodyScroll(document.body);
		console.log(open)
		return () => 
			enableBodyScroll(document.body);
		
	});

	return (
		<section
			onClick={({ target }) => {
				target.tagName === "SECTION" && closeModal();
			}}
			className={`modal ${open ? "open" : ""}`}
		>
			<div className={className}>
				<button onClick={closeModal}>×</button>
				{children}
			</div>
		</section>
	);
}
