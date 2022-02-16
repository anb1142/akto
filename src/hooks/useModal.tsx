import ModalView from "@components/ModalView";
import "@styles/components/ModalView.scss";
import { Dispatch, SetStateAction, useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("body");

const useModal = (close: () => void) => {
	const [closeAnim, setCloseAnim] = useState<boolean>(false);

	const closeModal = () => {
		setCloseAnim(true);
		setTimeout(() => {
			setCloseAnim(false);
			close();
		}, 200);
	};

	return {
		ModalView,
		closeAnim,
		closeModal,
	};
};

export default useModal;
