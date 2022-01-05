import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineClock } from "react-icons/hi";

import "@styles/components/DropdownDetails.scss";
export default function DropdownDetails({ title, content, children, noContentIcon }) {
	const [isOpen, setOpen] = useState(false);

	const handleOpen = (e) => {
		console.log(e.target.tagName )
		if (
			!['svg','path','SECTION','DIV'].includes(e.target.tagName)||
			content === null
		)
			return;
		setOpen(!isOpen);
		setTimeout(() => e.target.parentNode.parentNode.scrollIntoView({ behavior: "smooth" }), 300);
	};
	if (noContentIcon === undefined) noContentIcon = <HiOutlineClock />;

	return (
		<div className={`dropdetails ${isOpen && "open"} ${content && "available"}`}>
			<section onClick={handleOpen}>
				<div>
					{title}
					{children}
				</div>
				<span>{content ? <IoIosArrowDown /> : noContentIcon}</span>
			</section>

			{content && <article>{content}</article>}
		</div>
	);
}
