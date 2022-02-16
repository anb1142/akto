import "@styles/components/DropdownDetails.scss";
import { MouseEventHandler, useState } from "react";
import { HiOutlineClock } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

type Props = { title: string; content?: any; children: any };

const DropdownDetails = (props: Props) => {
	const [isOpen, setOpen] = useState(false);

	const handleOpen: MouseEventHandler = (e) => {
		const target = e.target as HTMLElement;
		if (!["svg", "path", "SECTION", "DIV"].includes(target.tagName) || props.content === null) return;
		setOpen(!isOpen);
		setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 300);
	};

	return (
		<div className={`dropdetails ${isOpen && "open"} ${props.content && "available"}`}>
			<section onClick={handleOpen}>
				<div>
					{props.title}
					{props.children}
				</div>
				<span>{props.content ? <IoIosArrowDown /> : <HiOutlineClock />}</span>
			</section>

			{props.content && <article>{props.content}</article>}
		</div>
	);
};

export default DropdownDetails;
