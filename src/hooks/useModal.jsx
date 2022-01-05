import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalView from "@components/ModalView";
export default function useModal() {
	const [open, setOpen] = useState(true);
	let navigate = useNavigate();
	const closeModal =  (e) => {
		e !== undefined && e.preventDefault();
		setOpen(false);
		setTimeout(() => navigate(-1), 500);
	};
	ModalView.defaultProps = {
		open,closeModal
	};
	return { ModalView, closeModal };
}
